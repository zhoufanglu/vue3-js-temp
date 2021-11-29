//ele-pls 按需引入
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "src/assets/scss/entrance.scss";
      ` }
    }
  },
  configureWebpack: {
    plugins: [
      // ...
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
};

