# Environment variables

Where every variable lives, per environment. Short version: **the `.env*` files
in the repo never reach the server** — prod values come from GitHub Secrets, dev
values from local `.env` files (with `.env.example` as a committed fallback).

## The files

| File | In git? | Role |
| --- | --- | --- |
| `backend/.env.example`, `frontend/.env.example` | yes | Placeholders + working dev defaults. Loaded by compose so a fresh clone runs. **No real secrets.** |
| `backend/.env`, `frontend/.env` | no (gitignored) | Your real local values. Override the example when present. |

`.gitignore` keeps `.env*` out of git but whitelists `!.env.example`.

## Three environments

| | Backend secrets (`DATABASE_URL`, `SMTP_*`) | `NODE_ENV` / `PORT` | Frontend `VITE_API_URL` |
| --- | --- | --- | --- |
| **Local (your machine)** | `backend/.env` | `docker-compose.dev.yml` | `frontend/.env` |
| **Fresh clone** | `backend/.env.example` (fallback) | `docker-compose.dev.yml` | `frontend/.env.example` |
| **Production (server)** | `/opt/paidemail/shared/.env` — written from GitHub Secrets at deploy | `ecosystem.config.js` (pm2) | baked into the bundle at build time |

The same secret exists in several places, but each is a separate copy owned by
one environment — not one value split across files. Prod secrets must not sit in
the repo; dev values must not depend on GitHub Secrets.

## Local (Docker Compose)

`docker-compose.yml` and `docker-compose.dev.yml` load env per service:

```yaml
env_file:
  - ./backend/.env.example      # base, always present in the repo
  - path: ./backend/.env        # your overrides
    required: false             # missing file is fine
environment:
  NODE_ENV: development         # non-secret, lives in compose
  PORT: 8000
```

Files are read in order — later wins. Compose reads them on the **host** at
`up` time and injects the values as container env vars; this is unrelated to the
build context, so `.dockerignore` (which keeps `.env` out of the image) does not
affect it.

Precedence (weak → strong): `.env.example` < `.env` < `environment:` < shell vars.

## Production (server, pm2)

No Docker. The backend runs under pm2; env reaches it like this:

1. CI reads `secrets.DATABASE_URL`, `secrets.SMTP_*` and writes them to a
   `prod.env` file (`umask 077` → `0600`) — `deploy.yml`, "Write backend production env".
2. rsync ships it to `/opt/paidemail/shared/.env` (outside the versioned release).
3. Each release symlinks it in: `ln -sfn shared/.env current/.env`.
4. NestJS `ConfigModule` reads `.env` from the process cwd, which pm2 sets to
   `/opt/paidemail/current`. Same file is also sourced for `prisma db push`.

`ecosystem.config.js` carries only the **non-secret** `NODE_ENV` and `PORT`.
`PORT` comes from the Ansible `backend_port` var (`deploy/group_vars/all.yml`),
the single source of truth that the nginx vhost also uses — so backend and proxy
can never disagree on the port.

## Frontend note

`VITE_*` variables are **build-time only** — Vite inlines them into the JS
bundle. They never exist as runtime env on the server; the prod value is the
GitHub repository variable `VITE_API_URL`, applied during the CI `vite build`.
Anything in a `VITE_*` var ends up public in the browser, so never put a secret there.

Changing the production domain means updating `VITE_API_URL` too — see
[deploy/README.md § Changing the domain](../deploy/README.md#changing-the-domain)
for the full procedure.

## Adding a variable

- **Backend secret**: add to `backend/.env.example` (placeholder) + your
  `backend/.env`, and to the GitHub `production` environment secrets + the
  `prod.env` heredoc in `deploy.yml`.
- **Backend non-secret runtime knob**: `ecosystem.config.js.j2` for prod,
  `environment:` in compose for local.
- **Frontend**: `frontend/.env.example` + `frontend/.env`, and the repo variable
  `VITE_API_URL` (or a new repo variable) for the CI build.
