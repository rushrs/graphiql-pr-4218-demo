import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.USE_IMPORT': JSON.stringify('true'),
  },
  server: {
    proxy: {
      '/graphql': 'http://localhost:4000',
    },
  },
});
