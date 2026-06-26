## Development (Docker Compose Watch)

### Requirements

- Docker Engine ≥ 23.0.0
- Docker Compose ≥ 2.22.0 (with `--watch` support)

### Quick Start

From the project root:

```bash
docker compose -f docker-compose.dev.yml up --watch
```

Env loads from `backend/.env.example` and `frontend/.env.example` out of the box,
so a fresh clone runs without setup. To override locally, copy either to `.env`
(gitignored) in the same folder and edit it. See [docs/ENV.md](docs/ENV.md) for
the full picture across local/CI/production.

### Services and ports

| Service  | Port | Purpose                      |
| -------- | ---- | ---------------------------- |
| frontend | 5173 | react application dev server |
| backend  | 8000 | Nest.js                      |
| db       | 5432 | PostgreSQL                   |

### How it works

- Code changes in `frontend/` or `backend/` are synced automatically → hot reload.
- Changes to `requirements.txt`, `package.json`, or `pnpm-lock.yaml` trigger a rebuild (dependencies are updated).

## Maintenance & Troubleshooting

Use these commands when code becomes stale (e.g., after a `git pull` or branch switch) or when dependencies change.

### Targeted Rebuilds

Update specific services without affecting the rest of the stack:

Bash

For Frontend

```bash
docker compose -f docker-compose.dev.yml up -d --build frontend && \
docker compose -f docker-compose.dev.yml watch
```

For Backend

```bash
docker compose -f docker-compose.dev.yml up -d --build backend && \
docker compose -f docker-compose.dev.yml watch
```

### State Management

**Hard Reset:** Wipe the database and rebuild all images from scratch (ignores cache):

Bash

```bash
docker compose -f docker-compose.dev.yml down -v && \
docker compose -f docker-compose.dev.yml build --no-cache && \
docker compose -f docker-compose.dev.yml watch
```

### Stop

```bash
docker compose -f docker-compose.dev.yml down
```
