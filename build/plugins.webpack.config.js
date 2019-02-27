
const path = require('path');
const merge = require('webpack-merge')
//const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./base.webpack.config.js')
const DIR_RESOURCE=require('./helper/dirResource')('plugins', process.env.NODE_ENV);

module.exports = merge(baseConfig, {
  // Укажите точку входа серверной части вашего приложения
  entry: {
    'example':   './src/plugins/example',
    'instagram-post':   './src/plugins/instagram-post',
    'forms':   './src/plugins/forms',
    //'page-blocks':   './src/plugins/page-blocks',
  },

  output: {
    path: path.resolve(__dirname, '../dist' + DIR_RESOURCE),
    publicPath: process.env.HOST_PLUGIN + DIR_RESOURCE +'/',
    filename: 'siteo-plugin-[name].js',
    library: ['siteo-plugins', "siteo-plugin-[name]"],
		libraryTarget: "umd",
    libraryExport: 'default',

  }
})
