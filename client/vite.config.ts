import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['ios/16.png', 'ios/20.png', 'android/android-launchericon-72-72.png', 'android/android-launchericon-96-96.png'],
      manifest: {
        name: 'Greenacy',
        short_name: 'Greenacy',
        description: 'Greenacy - Your Eco-friendly Companion',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'android/android-launchericon-72-72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'android/android-launchericon-96-96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'ios/20.png',
            sizes: '20x20',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'ios/16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
  },
})