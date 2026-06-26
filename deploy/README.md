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
  nodejs/              Node.js + pm2 + pm2 systemd startup
  webserver/           nginx.org + vhost + certbot + auto-renew
  app/                 app dirs + pm2 ecosystem config
```

## Prerequisites

- Ansible on the control machine (`pipx install --include-deps ansible`)
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
| `domain`              | group_vars/all.yml       | `diotek.pp.ua`       |
| `app_dir`             | group_vars/all.yml       | `/opt/paidemail`     |
| `frontend_static_dir` | group_vars/all.yml       | `/var/www/paidemail` |
| `backend_port`        | group_vars/all.yml       | `8000`               |
| `node_major`          | roles/nodejs/defaults    | `"24"`               |
| `nginx_repo_branch`   | roles/webserver/defaults | `""` (stable)        |
| `certbot_webroot`     | roles/webserver/defaults | `/var/www/certbot`   |
| `letsencrypt_email`   | roles/webserver/defaults | `""` (no email)      |

## Not handled here

Shipping application code. After build artifacts are in place
(`{{ app_dir }}/backend/dist`, built SPA in `{{ frontend_static_dir }}`),
start the backend once:

```bash
pm2 start /opt/paidemail/ecosystem.config.js && pm2 save
```

Later ecosystem-config changes are reloaded by the `app` role.
