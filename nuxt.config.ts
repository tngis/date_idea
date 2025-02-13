export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_URL,
      version: process.env.npm_package_version,
    },
  },

  pwa: {
    workbox: {
      globPatterns: [],
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: undefined,
    },
    devOptions: {
      enabled: false,
    },
    manifest: {
      name: 'T&C',
      short_name: 'T&C',
      description: 'Tengis & Chimgees private website',
      start_url: '/',
      display: 'standalone',
      theme_color: '#167fc5',
      background_color: '#FFFFFF',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'T&C',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-viewport',
    '@nuxtjs/device',
    '@vite-pwa/nuxt',
  ],

  css: ['@/assets/css/main.scss', 'nprogress/nprogress.css', 'vue-json-pretty/lib/styles.css'],

  plugins: ['@/plugins/vue-json-pretty'],

  googleFonts: {
    preload: true,
    families: {
      Montserrat: true,
      download: true,
      inject: true,
    },
    display: 'swap',
  },

  colorMode: {
    classSuffix: '',
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-07-24',
})
