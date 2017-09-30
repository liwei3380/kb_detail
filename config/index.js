// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// /api/a  ---> https://10.1.2.3:8080/api/a

// /xxxfasdfdasfsa/fafasdfsdaf/

var proxyTable = {
    '/api': {
        target: 'http://baike.baidu.com/', // target host 
        changeOrigin: true,
    },
    '/local/mock': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
            '^/local/mock': '/mock'
        }
    },
    '/postData': {
        target: 'https://tm.kbao123.com/3.8/',
        changeOrigin: true,
        pathRewrite: {
            '^/postData': ''
        }
    }
}

const nconf = require('nconf');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: proxyTable,
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
