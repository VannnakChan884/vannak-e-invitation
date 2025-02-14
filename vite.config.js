import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './', // Ensures correct file paths
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/index-BV8qYjGL.js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/index-BuHmtDJf.css",
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'no-store',  // Prevents caching issues
    },
  },
});
