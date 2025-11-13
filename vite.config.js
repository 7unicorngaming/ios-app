import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  }
});
