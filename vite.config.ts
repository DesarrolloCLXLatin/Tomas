import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['e6dc09d8f60789.lhr.life'],
  },
  optimizeDeps: {
    exclude: [''],
  },
});
