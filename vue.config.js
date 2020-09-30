const path = require('path');
module.exports = {
  publicPath:'/e/',
  pages: {
    index: {
      entry: 'src/pages/index/index.js',
      template: 'src/pages/index/index.html',
      filename: 'index.html',
    },
    'e/mobile': {
      entry: 'src/pages/mobile/index.js',
      template: 'src/pages/mobile/mobile.html',
      filename: 'mobile.html'
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        index: path.join(__dirname, 'src/pages/index'),
        mobile: path.join(__dirname, 'src/pages/mobile'),
      },
    },
  },
}