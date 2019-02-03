
const path = require('path');
const merge = require('webpack-merge')
//const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./base.webpack.config.js')
baseConfig.entry = {};

const DIR_RESOURCE=require('./helper/dirResource')('plugins');


module.exports = merge(baseConfig, {
  // Укажите точку входа серверной части вашего приложения
  entry: {
    'example':   './src/plugins/example',
    'instagram-post':   './src/plugins/instagram-post',
    'app-form':   './src/plugins/app-form',
    //'page-blocks':   './src/plugins/page-blocks',
  },

  output: {
    path: path.resolve(__dirname, '../public' + DIR_RESOURCE),
    publicPath: DIR_RESOURCE +'/',
    filename: 'siteo-plugin-[name].js',
    library: ['siteo-plugins', "[name]"],
		libraryTarget: "umd",
    libraryExport: 'default',

  }
})
