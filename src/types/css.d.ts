declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

// Vite environment variables type definition
interface ImportMetaEnv {
    readonly BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}