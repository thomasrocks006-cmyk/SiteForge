import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable external access for Replit
    port: 5173
  },
  build: {
    outDir: 'dist'
  }
})