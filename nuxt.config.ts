export default ({
    buildModules: [
        //"@nuxtjs/color-mode",
        //"@headlessui/vue",
        //"@heroicons/vue",
        //"@tailwindcss/aspect-ratio",
        //"@tailwindcss/forms",
        //"@tailwindcss/typography",
        "@nuxtjs/tailwindcss"
    ],
    modules: ['nuxt-directus'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
    typescript: {
        shim: false
    },
    directus: {
        url: "https://directus.digitool.media",
    }
})
