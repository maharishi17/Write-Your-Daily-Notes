import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Daily-Notes/',  // This must match your GitHub Pages URL
  plugins: [react()],
})