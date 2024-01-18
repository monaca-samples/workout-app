import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const HOST = process.env.MONACA_SERVER_HOST || '0.0.0.0';

export default defineConfig({
  root: './src',
  base: '',
  build: {
    outDir: '../www',
    minify: false,
    emptyOutDir: false,
  },
  server: {
    host: HOST,
    port: 8080,
  },
  plugins: [react()],
});
