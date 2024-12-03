import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      url: 'url', // Alias the `url` module to its npm package
    },
  },
  define: {
    'process.env': {}, // Provide a polyfill for `process.env`
  },
});
