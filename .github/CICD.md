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
  releases/<run_id>-<run_attempt>/  # each deploy attempt; pnpm install --prod + prisma db push run here
  shared/
    .env                    # written from secrets (0600) — never in git
    database/prod.db        # persistent SQLite, never overwritten
    frontend-next/          # staging for the SPA before sudo-publish
  current -> releases/<id>  # pm2 cwd; flipped only after install + migrate succeed
```

Frontend builds to static files and is published to `/var/www/paidemail` (served by nginx).

Rollback: `ln -sfn releases/<previous> /opt/paidemail/current && pm2 reload /opt/paidemail/ecosystem.config.js`.

### Why `run_id-run_attempt`

`RELEASE_DIR` is keyed by both `github.run_id` and `github.run_attempt`, not
just `run_id`. `run_attempt` starts at 1 and increments every time a workflow
run is re-run. Without it, re-running a failed deploy would reuse the same
directory that `current` already points at — and that the live pm2 process is
running from — so `rsync --delete` and `pnpm install --prod` would rewrite the
files of a process that's still serving traffic, causing a crash loop
(`MODULE_NOT_FOUND` while `node_modules` is mid-rewrite) until the install
finished.

With a unique directory per attempt, every deploy — first try or re-run —
builds and migrates in total isolation from the running release. The `current`
symlink is the single atomic switch, flipped only once the new release is
fully ready (`ln -sfn ${RELEASE_DIR} current`, after `pnpm install` and
`prisma db push` succeed). The old release keeps serving until that one line
runs, so a failed or in-progress build can never affect production, and
rollback is just re-pointing the same symlink at the previous directory.

## One-time setup

### 1. Rotate leaked credentials

The SMTP password previously committed in `backend/.env*` is in git history — **rotate it** before first deploy. The env files are now git-ignored.

### 2. GitHub → Settings → Environments → `production`

Secrets:

| Secret                                                                         | Value                                                                        |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `SSH_PRIVATE_KEY`                                                              | Private key of a CI-only keypair; public key in `~hovo/.ssh/authorized_keys` |
| `SSH_HOST`                                                                     | `diotek.pp.ua`                                                               |
| `SSH_USER`                                                                     | `hovo`                                                                       |
| `SSH_KNOWN_HOSTS`                                                              | Output of `ssh-keyscan diotek.pp.ua`                                         |
| `DATABASE_URL`                                                                 | `file:/opt/paidemail/shared/database/prod.db`                                |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | Production mail settings                                                     |

### 3. Repository variable

- `VITE_API_URL` = `https://primess.diotek.pp.ua/api` (public; baked into the frontend bundle at build time).

### 4. Server prerequisites

Provisioned by the Ansible `app` role (`deploy/`):

- Release layout dirs + `/etc/sudoers.d/paidemail-deploy` granting `hovo` NOPASSWD `rsync`/`chown` (frontend publish).
- pm2 `ecosystem.config.js` with `cwd: /opt/paidemail/current`, `script: dist/src/main.js`.
  Run `deploy/run.ps1 --tags app` after pulling these changes. The pm2 app must be started once: `pm2 start /opt/paidemail/ecosystem.config.js && pm2 save`.

### 5. Branch protection (`main`)

Require the CI workflow to pass and require PRs before merge.
