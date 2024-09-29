import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

//Set the correct base in vite.config.js.
export default defineConfig({
  base: '/info/',
  plugins: [react()],
})