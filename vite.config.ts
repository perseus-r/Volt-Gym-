import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      // Desabilitar SW em builds para Capacitor nativo
      disable: process.env.CAPACITOR_BUILD === 'true',
      registerType: 'autoUpdate',
      includeAssets: ['brand/volt-icon.png', 'favicon.ico'],
      manifest: {
        name: 'VOLT Fitness',
        short_name: 'VOLT',
        description: 'A IA premium que cria treinos sob medida, acompanha sua evolução e aumenta sua consistência.',
        theme_color: '#0b1020',
        background_color: '#0b1020',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        categories: ['fitness', 'health', 'lifestyle'],
        // Desencorajar prompts automáticos de instalação (iOS Safari)
        prefer_related_applications: true,
        related_applications: [],
        icons: [
          {
            src: '/brand/volt-icon.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/brand/volt-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/brand/volt-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: '/brand/volt-icon.png',
            sizes: '512x512',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'VOLT Fitness App'
          }
        ]
      },
      workbox: {
        // Force aggressive updates - critical for iOS PWA
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // Don't cache version.json - always fetch fresh
        navigateFallbackDenylist: [/^\/version\.json/],
        runtimeCaching: [
          // Never cache version.json
          {
            urlPattern: /\/version\.json$/,
            handler: 'NetworkOnly'
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          // NUNCA cachear rotas de autenticação (dados sensíveis)
          {
            urlPattern: /^https:\/\/osvicgbgrmyogazdbllj\.supabase\.co\/auth\/.*/i,
            handler: 'NetworkOnly'
          },
          // Cache geral do Supabase (exceto auth) - reduzido para 1 hora
          {
            urlPattern: /^https:\/\/osvicgbgrmyogazdbllj\.supabase\.co\/rest\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 // 1 hora apenas
              },
              networkTimeoutSeconds: 10,
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: false
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom', '@tanstack/react-query', 'framer-motion'],
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
}));
