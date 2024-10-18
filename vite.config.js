import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Write-Your-Daily-Notes/',  // This should match your GitHub Pages repo name
  plugins: [react()],
})
