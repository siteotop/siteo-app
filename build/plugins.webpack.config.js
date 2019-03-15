
const path = require('path');
const merge = require('webpack-merge')
const webpack = require('webpack');
//const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./base.webpack.config.js')
const DIR_RESOURCE=require('./helper/dirResource')('plugins', process.env.NODE_ENV);

baseConfig.plugins.push( new webpack.DefinePlugin({
  'process.env': {
     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  }
}));


module.exports = merge(baseConfig, {
  // Укажите точку входа серверной части вашего приложения
  entry: {
    'example':   './src/plugins/example',
    'instagram-post':   './src/plugins/instagram-post',
    'forms':   './src/plugins/forms',
    'structure-admin':   './src/plugins/structure-admin',
    'pages-admin':   './src/plugins/pages-admin',
    'bus':   './src/plugins/bus',
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
