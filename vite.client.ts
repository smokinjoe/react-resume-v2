import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        ssrManifest: true,
        outDir: 'dist/client',
    }
})