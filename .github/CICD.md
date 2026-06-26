# CI/CD

Two workflows:

- **`ci.yml`** — runs on every PR and on push to `dev`/`main`. Detects which app changed (`dorny/paths-filter`) and runs only the relevant jobs.
  - Backend: `prisma generate` → `lint:ci` → `jest` → e2e (throwaway SQLite) → `build`.
  - Frontend: `eslint` → `tsc -b` typecheck + `vite build`.
- **`deploy.yml`** — runs on push to `main` (or manual dispatch). Builds both apps, ships them over SSH, and reloads pm2. Uses the `production` GitHub Environment.

Actions are pinned to commit SHAs (the `# v4` comment is just a hint). `permissions: contents: read` keeps the token least-privilege. `concurrency` cancels stale CI runs and serializes deploys.

## Deploy model

Backend uses an atomic release layout on the server:

```
/opt/paidemail/
  releases/<run_id>/        # each deploy; pnpm install --prod + prisma generate run here
  shared/
    .env                    # written from secrets (0600) — never in git
    database/dev.db         # persistent SQLite, never overwritten
    frontend-next/          # staging for the SPA before sudo-publish
  current -> releases/<id>  # pm2 cwd; flipped atomically after a healthy install
```

Frontend builds to static files and is published to `/var/www/paidemail` (served by nginx).

Rollback: `ln -sfn releases/<previous> /opt/paidemail/current && pm2 reload /opt/paidemail/ecosystem.config.js`.

## One-time setup

### 1. Rotate leaked credentials
The SMTP password previously committed in `backend/.env*` is in git history — **rotate it** before first deploy. The env files are now git-ignored.

### 2. GitHub → Settings → Environments → `production`
Secrets:

| Secret | Value |
| --- | --- |
| `SSH_PRIVATE_KEY` | Private key of a CI-only keypair; public key in `~hovo/.ssh/authorized_keys` |
| `SSH_HOST` | `diotek.pp.ua` |
| `SSH_USER` | `hovo` |
| `SSH_KNOWN_HOSTS` | Output of `ssh-keyscan diotek.pp.ua` |
| `DATABASE_URL` | `file:/opt/paidemail/shared/database/dev.db` |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | Production mail settings |

### 3. Repository variable
- `VITE_API_URL` = `https://diotek.pp.ua/api` (public; baked into the frontend bundle at build time).

### 4. Server prerequisites
Provisioned by the Ansible `app` role (`deploy/`):
- Release layout dirs + `/etc/sudoers.d/paidemail-deploy` granting `hovo` NOPASSWD `rsync`/`chown` (frontend publish).
- pm2 `ecosystem.config.js` with `cwd: /opt/paidemail/current`, `script: dist/src/main.js`.
Run `deploy/run.ps1 --tags app` after pulling these changes. The pm2 app must be started once: `pm2 start /opt/paidemail/ecosystem.config.js && pm2 save`.

### 5. Branch protection (`main`)
Require the CI workflow to pass and require PRs before merge.
