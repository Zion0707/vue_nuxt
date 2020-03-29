const webpack = require('webpack')
export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        env:{
            npm_package_name:'技术博客'
        },
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
                {rel: 'icon',type: 'image/x-icon',href: '/favicon.ico' }
            ],
        script:[
            // {src:'~/assets/js/normal.js'}
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    // loading 颜色
    loading: {
        color: '#7545C9'
    },
    /*
     ** Global CSS
     */
    css: [
        'ant-design-vue/dist/antd.less',
        '@/static/css/normal.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/antd-ui.js',
        '@/plugins/echarts.js',
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [

    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        // 引用jq
        plugins: [
            new webpack.ProvidePlugin({
                '$' : 'jquery'
            })
        ],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // 自定义 ant ui 主题颜色
            config.module.rules.push(
                {
                    test:/\.less/,
                    loader: 'less-loader', // compiles Less to CSS
                    options: {
                        modifyVars: {
                            'primary-color': '#1DA57A',
                            'link-color': '#1DA57A',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                    },
                }
            )
        }
    }
}