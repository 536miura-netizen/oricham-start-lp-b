/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
