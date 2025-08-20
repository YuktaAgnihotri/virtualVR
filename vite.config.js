import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
        import svgr from 'vite-plugin-svgr';
 https://vite.dev/config/
module.exports =  defineConfig({
  plugins: [react(),
      tailwindcss(),
      svgr(),
  ],  
base : '/',
});
