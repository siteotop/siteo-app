
const path = require('path');
const merge = require('webpack-merge')
//const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./base.webpack.config.js')
baseConfig.entry = {};
module.exports = merge(baseConfig, {
  // Укажите точку входа серверной части вашего приложения
  entry: {
    'example':   './src/plugins/example',
    'instagram-post':   './src/plugins/instagram-post',
  },

  output: {
    //path: path.resolve(__dirname, '../' + DIR_RESOURCE),
    //publicPath: '/dist/',
    filename: 'siteo-plugin-[name].js',
    library: "siteo-plugin-[name]",
		libraryTarget: "umd",
    libraryExport: 'default',

  }
})