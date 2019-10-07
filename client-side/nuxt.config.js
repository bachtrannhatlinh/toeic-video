const pkg = require('./package')


module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Langadvisor',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/app.js', ssr: false }
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
    ],

    env: {
        API_PORT: 3001,
        SOCKET_PORT: 5001,
        CRON_SOCKET_PORT: 5002,
        CRAWL_SOCKET_PORT: 5004,
        SITE_NAME: 'Langadvisor',
        SALT_OBJECT: '123qwe!@#-gl',
        SALT_DECODE: 'langadvisor'
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            vendor: ['vue-i18n']
        },
        maxChunkSize: 300000
    },

    performance: {
        hints: false
    },

    /*
    ** Router middleware
    */
    router: {
        middleware: [
            'template',
            'authentication',
            'set-store',
        ]
    }

}
