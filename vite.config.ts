import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages base path:
// - Repo named `username.github.io` → use base: '/'
// - Repo named `portfolio` (or any project repo) → use base: '/portfolio/'
// Update this value to match your GitHub repository name before deploying.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
