
/**
   create path  for files
*/

const path = require('path');
const webpack = require('webpack');

const VERSION = process.env.npm_package_version;
const NODE_ENV = process.env.NODE_ENV || "development";
const DIR_RESOURCE = (NODE_ENV == "development")? '/dev': ('/v'+VERSION);
const SITEO_CONFIG = require(path.resolve(__dirname, '../ssr/configs.js'));

/**
  From 15 version  of vue-loader, we need use  VueLoaderPlugin
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/**
  extract-text-webpack-plugin  was changed to mini-css-extract-plugin for CSS
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
/**
  minimization plugin
*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
  Cpoy files
*/
const CopyWebpackPlugin = require('copy-webpack-plugin');

//var HtmlWebpackPlugin = require('html-webpack-plugin');

var PluginsHtml= [];

/**
  index.html for siteo without ssr rendering
*/
if (!SITEO_CONFIG.ssr) {
    PluginsHtml.push(new HtmlWebpackPlugin({
     template: 'build/template.html',
     filename: path.resolve(__dirname, "../public")+ '/index.html',
     //inject: false,
     templateParameters: {
         title: "<title>siteo-template</title>",
         body_content: '<div id="app"></div>',
         body_state: '',
         siteo_config: JSON.stringify(SITEO_CONFIG),
         siteo_instance: ''
     }
   }));
} else {

  /**
    index.ssr.html for siteo which is genereting using ssr
  */
  PluginsHtml.push(new HtmlWebpackPlugin({
    template: 'build/template.html',
    filename: path.resolve(__dirname, "../ssr")+ '/index.ssr.html',
    //inject: false,
    templateParameters: {
        title: `{{{ meta.inject().title.text() }}}
          {{{ meta.inject().meta.text() }}}
          {{{ meta.inject().link.text() }}}
          {{{ meta.inject().style.text() }}}`,
        body_content: '<!--vue-ssr-outlet-->',
        body_state: '{{{renderState()}}}',
        siteo_config: '{{{JSON.stringify(configsAPI)}}}',
        siteo_instance: ''
    }
  }));

  /**
    index.ssr.plain.html for siteo which is genereting using ssr and start how plain index html
  */
  PluginsHtml.push(new HtmlWebpackPlugin({
    template: 'build/template.html',
    filename: path.resolve(__dirname, "../ssr")+ '/index.ssr.plain.html',
    //inject: false,
    templateParameters: {
        title: "<title>siteo-template</title>",
        body_content: '<div id="app"></div>',
        body_state: '',
        siteo_config: '<%= configs %>',
        siteo_instance: 'window.__SITEO_INSTANCE__ = <%= __SITEO_INSTANCE__ %>'

    }
  }));

}




module.exports = {
  mode:  NODE_ENV,
  devtool:  NODE_ENV ==  'development' ? "source-map" : false,
  watch: NODE_ENV ==  'development',  // наблюдение за изменяемыми файлами

  entry: {

    'polyfill': '@babel/polyfill',
    'app': './src/app/index.js',
    'locale-en': './src/core/i18n/en.js',
    'pages': './src/plugins/pages',
    'core': './src/client.js',


  },

  output: {
    path: path.resolve(__dirname, '../dist' + DIR_RESOURCE),
    publicPath: DIR_RESOURCE +'/',
    filename: 'siteo-[name].js',
    library: "siteo-[name]",
		libraryTarget: "umd",
    libraryExport: 'default'

  },

  watchOptions: {
      aggregateTimeout: 500,
      ignored: /node_modules/,
      poll: 1000
 },



optimization: {
    minimizer: [
      /**
        it work on this options https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options
      */
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments : false // remove all comments
          },

          compress: {
              drop_console: true // drop console call

          }
        }
      }
      ),
      new OptimizeCSSAssetsPlugin({})
    ],

    /**
      split for common chunk
    */
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: function () {return false},
          priority: -10
        },

       }
    }

  },


  /**
    https://webpack.js.org/configuration/
  */
  resolve: {
    modules: [

        path.resolve(__dirname, "../src"),
        "node_modules"
      ],

    alias: {
      'vue': 'vue/dist/vue.runtime.esm.js',
      'router': 'vue-router/dist/vue-router.esm.js' ,
      'vuex': 'vuex/dist/vuex.esm.js',




    }
  },

      plugins: [


        ...PluginsHtml,


        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(NODE_ENV),
            VERSION: JSON.stringify(VERSION)
          }
        }),
        /**Vue Loader */
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),



            // new HtmlWebpackPlugin()

      ],


/**
  modules
*/

    module: {

      rules: [

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules/vue-awesome'),
          //  path.resolve(__dirname, 'node_modules/vuetify/src'),
            path.resolve(__dirname, '../node_modules/vuetify/es5/components'),
          ]
      },


      /**
        was created  by this documentation https://webpack.js.org/loaders/sass-loader/
        and Vue Loader  https://vue-loader.vuejs.org/migrating.html#css-extraction

      */
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          NODE_ENV !== 'production'
           ? 'vue-style-loader'
           : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      /**
        like above config
      */
      {
        test: /\.styl$/,
        use: [

          // https://vue-loader.vuejs.org/guide/extract-css.html#webpack-4
          NODE_ENV !== 'production'
           ? 'vue-style-loader'
           : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader',

        ]
      },

    ]
  },

};
