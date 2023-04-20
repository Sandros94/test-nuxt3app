import { presetAnu } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'

export default defineConfig({
    include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
    shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            cdn: 'https://esm.sh/',
            scale: 1.2,
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle',
                // ...
            },
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                sans: 'Jost:100,200,300,400,500,600,700,800,900',
                mono: ['Fira Code:400,500,600,700', 'Fira Mono:400,500,600,700']
            },
        }),
        // anu-vue preset
        presetAnu(),

        // default theme preset
        presetThemeDefault(),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})