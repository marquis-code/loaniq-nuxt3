import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      title: "LoanIQ Admin",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  css: [
    '@/assets/css/main.css', // Tailwind CSS
    '@/assets/css/custom.css',   // Your custom styles
  ],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [],
  modules: ['@kevinmarrec/nuxt-pwa'],
  pwa: {
    workbox: {
      enabled: true,
    },
    meta: {
      title: "LoanIQ Admin",
      author: "Marquis",
      mobileAppIOS: false,
      mobileApp: true,
      description:
        "specialize in software development, product design, and bespoke solutions to help businesses innovate and thrive in the digital age.",
      theme_color: "#27396B",
      background_color: "#27396B",
      display: "standalone",
      start_url: "/",
      nativeUI: true,
    },
    icon: {
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
    manifest: {
      name: "Achilles Drill",
      lang: "fa",
      useWebmanifestExtension: false,
    },
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern: "https://cdn.snipcart.com/.*",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
      {
        urlPattern:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      },
    ],
  },
  nitro: {
    prerender: {
      routes: ['/', '/create-pin', '/forgot-password'], // Removed '/about', '/contact' for 404 issues
      ignore: [
        '/dashboard/**', // Ignore dynamic dashboard routes
        '/dashboard/invest',
        '/dashboard/loans',
        '/dashboard/payments',
        '/dashboard/accounts',
        '/dashboard/support',
        '/about', // Explicitly ignore if not needed
        '/contact', // Explicitly ignore if not needed
      ],
      failOnError: false, // Suppress the errors and continue the generation
    },
  },
});
