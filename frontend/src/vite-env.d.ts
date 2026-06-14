/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Базовый URL backend-API. См. .env.example */
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
