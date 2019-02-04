

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const html_template= 'build/template.html';

const siteoConfigs = require(path.resolve(__dirname, './configs.js'));


/**
  index.html for siteo without ssr rendering
*/

baseConfig.plugins.push(new HtmlWebpackPlugin({
 template:html_template,
 filename: path.resolve(__dirname, "../public")+ '/index.html',
 //inject: false,
 templateParameters: {
     title: "<title>siteo-template</title>",
     body_content: '<div id="app"></div>',
     body_state: '',
     siteo_config: JSON.stringify(siteoConfigs.frontend),
     siteo_instance: ''
 }
}));

/**
  index.ssr.html for siteo which is genereting using ssr
*/
baseConfig.plugins.push(new HtmlWebpackPlugin({
  template: html_template,
  filename: path.resolve(__dirname, "../ssr/template")+ '/index.ssr.html',
  //inject: false,
  templateParameters: {
      title: `{{{ meta.inject().title.text() }}}
      {{{ meta.inject().meta.text() }}}
      {{{ meta.inject().link.text() }}}
      {{{ meta.inject().style.text() }}}`,
      body_content: '<!--vue-ssr-outlet-->',
      body_state: '{{{renderState()}}}',
      siteo_config: '{{{JSON.stringify(configsAPI.frontend)}}}',
      siteo_instance: ''
  }
}));

  /**
    index.ssr.plain.html for siteo which is genereting using ssr and start how plain index html
  */
 baseConfig.plugins.push(new HtmlWebpackPlugin({
  template: html_template,
  filename: path.resolve(__dirname, "../ssr/template")+ '/index.ssr.plain.html',
  //inject: false,
  templateParameters: {
      title: "<title>siteo-template</title>",
      body_content: '<div id="app"></div>',
      body_state: '',
      siteo_config: '<%= configs %>',
      siteo_instance: 'window.__SITEO_INSTANCE__ = <%= __SITEO_INSTANCE__ %>'

  }
}));


const createDirResource = require('./helper/dirResource');
const DIR_RESOURCE=createDirResource('assets', siteoConfigs.backend.NODE_ENV);





module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist' + DIR_RESOURCE),
    publicPath: siteoConfigs.backend.host_app_js + DIR_RESOURCE +'/',
    filename: 'siteo-[name].js',
    library: "siteo-[name]",
		libraryTarget: "umd",
    libraryExport: 'default'

  },
  entry: {

    'polyfill': '@babel/polyfill',
    'app': './src/app/index.js',
    'locale-en': './src/core/i18n/en.js',
    'pages': './src/plugins/pages',
    'core': './src/client.js',
  },

} );
