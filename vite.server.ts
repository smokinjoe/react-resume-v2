import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        ssr: 'src/entry-server.tsx',
        outDir: 'dist/server',
    }
})