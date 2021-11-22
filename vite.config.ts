import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { minifyHtml, injectHtml } from 'vite-plugin-html'



// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080
  },
  plugins: [
    react(),

    minifyHtml(),
    injectHtml({
      injectData: {
        title: 'MUI',
        injectScript: '<script src="./inject.js"></script>',
      },
    }),
  ],

  css: {
    modules: {
      //generateScopedName: "[name]__[local]___[hash:base64:5]",
      generateScopedName: "[hash:base64:4]",
    }
  },
})
