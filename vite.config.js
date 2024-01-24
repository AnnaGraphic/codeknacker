import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }
  //when running `npm run dev`page will start serving on path http://localhost:5173/ instead of http://localhost:5173/codeknacker/
  if (command !== 'serve') {
    config.base = '/codeknacker/'
  }

  return config
})
