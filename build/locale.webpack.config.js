
const path = require('path');
const BaseConfig = require('./base.webpack.config.js');
const DIR_RESOURCE = process.env.DIR_RESOURCE || 'dev/dist';
BaseConfig.entry = {

  'en': './src/core/i18n/en.js',

};

BaseConfig.output={
  path: path.resolve(__dirname, '../' + DIR_RESOURCE+'/locale'),
  publicPath: 'dist',
  filename: '[name].js',
  library: "SiteoLocal",
  libraryTarget: "var"

};

BaseConfig.devtool=false;
BaseConfig.watch=false;
BaseConfig.plugins=[];

module.exports = BaseConfig;
