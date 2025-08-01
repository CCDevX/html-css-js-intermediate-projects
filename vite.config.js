import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    build: {
        minify: false,
        target: 'es2015',
        rollupOptions: {
            output: {
                format: 'iife',
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    preview: {
        port: 4173,
        host: true
    }
})