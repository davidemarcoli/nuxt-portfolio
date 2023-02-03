// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "pathe";
import {useSchemaOrg} from "@unhead/schema-org-vue";

export default defineNuxtConfig({
    components: {global: true, dirs: ['components']},
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@nuxtjs/robots',
        'nuxt-icon',
        'nuxt-delay-hydration',
        'nuxt-purgecss',
    ],
    plugins: [
        {src: '~/plugins/aos', mode: 'client'},
        '~/plugins/naive',
        // '~/plugins/typewriter',
    ],
    alias: {
        '@': resolve(__dirname, '/'),
    },
    css: [
        '~/assets/main.scss',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    colorMode: {
        preference: 'system',
        fallback: 'dark',
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        componentName: 'ColorScheme',
        classPrefix: '',
        classSuffix: '',
        dataValue: '',
        storageKey: 'nuxt-color-mode'
    },
    delayHydration: {
        debug: process.env.NODE_ENV === 'development'
    },
    extends: [
        'nuxt-seo-kit'
    ],
    runtimeConfig: {
        public: {
            siteUrl: 'https://beta.davidemarcoli.dev',
            siteName: 'Davide Marcoli\'s Portfolio',
            siteDescription: 'Software Engineer, Web Developer, and Computer Science Student',
            language: 'en-US',
        }
    },
    linkChecker: {
        failOn404: true,
    },
})

useSchemaOrg({
    definePerson: {
        name: 'Davide Marcoli',
        url: 'https://davidemarcoli.dev',
        sameAs: [
            'https://www.linkedin.com/in/davide-marcoli-3b2b321bb/',
            'https://github.com/davidemarcoli',
            'https://www.instagram.com/davidemarcoli/',
            'https://www.youtube.com/@davidemarcoli',
        ],
        birthDate: '2005-02-13',
        birthPlace: {
            name: 'Aarau (AG)',
            address: {
                addressCountry: 'Switzerland',
                addressLocality: 'Aarau',
                addressRegion: 'AG',
                postalCode: '5000',
            }
        },
        gender: 'Male',
        givenName: 'Davide',
        familyName: 'Marcoli',
        height: '1.81m',
        jobTitle: 'Software Engineer',
    },
    defineWebSite: {
        name: 'Davide Marcoli\'s Portfolio',
        url: 'https://davidemarcoli.dev',
        description: 'Software Engineer, Web Developer, and Computer Science Student',
        inLanguage: 'en-US',
    },
})