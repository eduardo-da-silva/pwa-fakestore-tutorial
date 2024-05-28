import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  isCustomElement: (tag) => tag.startsWith('passage-'),
  plugins: [
    vue(),
    VueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Fake Store',
        short_name: 'FakeStore',
        start_url: '.',
        display: 'standalone',
        display_override: ['standalone', 'window-controls-overlay', 'browser'],
        dir: 'auto',
        background_color: '#ffffff',
        lang: 'pt',
        scope: '/',
        description: 'Fake Store: Fantástica loja de produtos',
        injectManifest: {
          globPatterns: ['**/*']
        },
        strategies: 'injectManifest',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        id: 'com.fake-store.app',
        orientation: 'any',
        launch_handler: {
          client_mode: ['navigate-existing', 'auto']
        },
        categories: ['education', 'shopping']
      },
      // {
      //   name: 'Fake Store',
      //   short_name: 'FakeStore',
      //   description: 'Fake Store: Fantástica loja de produtos',
      //   theme_color: '#ffffff',
      //   display: 'fullscreen',
      //   icons: [
      //     {
      //       src: 'pwa-192x192.png',
      //       sizes: '192x192',
      //       type: 'image/png',
      //       purpose: 'any'
      //     },
      //     {
      //       src: 'pwa-512x512.png',
      //       sizes: '512x512',
      //       type: 'image/png',
      //       purpose: 'maskable'
      //     }
      //   ],
      //   id: 'com.fake-store.app',
      //   orientation: 'any',
      //   background_color: '#ffffff',
      //   start_url: '.',
      //   launch_handler: {
      //     client_mode: ['navigate-existing', 'auto']
      //   }
      // },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
