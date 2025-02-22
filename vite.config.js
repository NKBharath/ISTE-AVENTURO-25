import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: 'dist' // Ensures build output is in 'dist'
  },
  server: {
    historyApiFallback: true // Important for handling SPA routes
  },
  preview: {
    historyApiFallback: true // Ensures proper routing in preview mode
  }
});
