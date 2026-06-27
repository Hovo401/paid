# deploy/

Ansible provisioning for the app server. One command turns a blank Ubuntu host
into a working server:

- Node.js (NodeSource) + pm2 with systemd boot resurrection
- nginx from nginx.org (modern build, `http2 on;`)
- Let's Encrypt cert via webroot, auto-renewal + nginx reload hook
- TLS reverse proxy: SPA static root + `/api/` → backend

Target host lives in `inventory.ini`, values in `group_vars/all.yml`.

## Layout

```
ansible.cfg            inventory, roles path, become defaults
inventory.ini          target host(s)
group_vars/all.yml     domain, app_dir, static dir, backend port
site.yml               entrypoint
roles/
  firewall/            ufw default-deny + 22/80/443
  nodejs/              Node.js + pm2 + pm2 systemd startup
  webserver/           nginx.org + vhost + certbot + auto-renew
  app/                 app dirs + pm2 ecosystem config
```

## Prerequisites

- Ansible on the control machine (`pipx install --include-deps ansible`) plus
  collections: `ansible-galaxy collection install -r requirements.yml`
  (or use `run.ps1`, which runs a pinned `willhallonline/ansible` image that
  already bundles them)
- SSH access to the target as the user in `inventory.ini`, with sudo
- DNS for `domain` already points at the server (certbot needs reachable :80)

## Usage

```bash
cd deploy

# dry run (command/shell tasks are skipped under --check)
ansible-playbook site.yml --ask-become-pass --check --diff

# apply
ansible-playbook site.yml --ask-become-pass

# one layer
ansible-playbook site.yml --ask-become-pass --tags webserver
```

## Variables

| Variable              | Where                    | Default              |
|-----------------------|--------------------------|----------------------|
| `domain`              | group_vars/all.yml       | `primess.diotek.pp.ua` |
| `app_dir`             | group_vars/all.yml       | `/opt/paidemail`     |
| `frontend_static_dir` | group_vars/all.yml       | `/var/www/paidemail` |
| `backend_port`        | group_vars/all.yml       | `8000`               |
| `node_major`          | roles/nodejs/defaults    | `"24"`               |
| `pm2_version`         | roles/nodejs/defaults    | `"5.4.3"`            |
| `ssh_port`            | roles/firewall/defaults  | `22`                 |
| `nginx_repo_branch`   | roles/webserver/defaults | `""` (stable)        |
| `certbot_webroot`     | roles/webserver/defaults | `/var/www/certbot`   |
| `letsencrypt_email`   | roles/webserver/defaults | `""` (no email)      |

## Changing the domain

The domain is referenced in three independent places that must be updated together:

1. **`group_vars/all.yml`** — set `domain:` to the new value. Drives the nginx
   `server_name` and the Let's Encrypt cert request (`roles/webserver`).
2. **`inventory.ini`** — the SSH target for the control machine. Only needs to
   change if you were addressing the server by its old domain name; if you SSH
   in by IP or a separate hostname, leave it as-is.
3. **GitHub → Settings → Environments → `production`** (not managed by Ansible,
   edit directly in the GitHub UI):
   - Secret `SSH_HOST` → new domain
   - Secret `SSH_KNOWN_HOSTS` → re-run `ssh-keyscan <new-domain>` and paste the output
   - Repository variable `VITE_API_URL` → `https://<new-domain>/api` (baked into
     the frontend bundle at build time, see `.github/workflows/deploy.yml`)

DNS for the new domain must already point at the server before you proceed —
certbot below needs `:80` reachable on that name.

```bash
cd deploy
ansible-playbook site.yml --ask-become-pass --tags webserver
```

This renders a new vhost file at `/etc/nginx/conf.d/<new-domain>.conf` and
issues a fresh Let's Encrypt cert. It does **not** remove the old vhost file —
delete it manually on the server once the new one is confirmed working:

```bash
sudo rm /etc/nginx/conf.d/<old-domain>.conf
sudo systemctl reload nginx
```

Then push to `main` (or re-run the `deploy.yml` workflow manually) so the
frontend rebuilds with the new `VITE_API_URL` and the health check hits the
new host. Verify by opening `https://<new-domain>` and `https://<new-domain>/api/health`.

## Secrets

`DATABASE_URL` (GitHub Actions secret, `production` environment) must be an
absolute `file:` path under `{{ app_dir }}/shared/database`, e.g.
`file:/opt/paidemail/shared/database/prod.db`. The backend reads this through
two different sqlite drivers (Prisma's CLI engine for `db push`, `@libsql/client`
at runtime) - a relative path can resolve to two different files between them.

## Not handled here

Shipping application code. After build artifacts are in place
(`{{ app_dir }}/backend/dist`, built SPA in `{{ frontend_static_dir }}`),
start the backend once:

```bash
pm2 start /opt/paidemail/ecosystem.config.js && pm2 save
```

Later ecosystem-config changes are reloaded by the `app` role.
