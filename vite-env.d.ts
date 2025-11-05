interface ImportMetaEnv {
  readonly VITE_FOUNDRY_CLIENT_SECRET: string;
  readonly VITE_FOUNDRY_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}