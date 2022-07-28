import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig ({
    buildModules: ['@nuxtjs/tailwindcss'],
    modules: ['nuxt-directus'],
    ssr: true,
    tailwindcss: {
        cssPath: 'assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: false,
    },
    directus: {
        url: "https://directus.digitool.media",
    }
})
