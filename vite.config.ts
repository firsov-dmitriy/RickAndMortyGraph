import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';
import react from '@vitejs/plugin-react';

import * as path from 'path';

dotenv.config();

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@packages': path.resolve(__dirname, './src/packages'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  server: {
    port: Number(process.env.VITE_APP_PORT) || 8888,
  },
  plugins: [react()],
});
