// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
    modules: [
        '@anu-vue/nuxt',
        '@unocss/nuxt',
        '@nuxtjs/color-mode'
    ],
    nitro: {
        compressPublicAssets: true,
        prerender: {
            crawlLinks: true,
        },
    },
    typescript: {
        shim: false
    },
    css: [
        '@anu-vue/preset-theme-default/dist/style.css'
    ],
    colorMode: {
        preference: 'system',
        fallback: 'light',
        classSuffix: '',
    },
    app: {
        head: {
            title: 'Website',
            htmlAttrs: {
                lang: 'en'
            }
        },
    }
});