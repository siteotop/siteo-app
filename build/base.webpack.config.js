
/**
   create path  for files
*/

const path = require('path');

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || "development";
const DIR_RESOURCE = process.env.DIR_RESOURCE || 'dev/dist';

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

/**
  Cpoy files
*/
const CopyWebpackPlugin = require('copy-webpack-plugin');

//var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  mode:  NODE_ENV,
  devtool:  NODE_ENV ==  'development' ? "source-map" : false,
  watch: NODE_ENV ==  'development',  // наблюдение за изменяемыми файлами

  entry: {
    // index without template
  //  'siteo-core': './src/core.js',
    // index with template
    'core': './src/core/index.js',
    'template': './src/template/install.js',
    'en': './src/core/i18n/en.js',
    // index with template admin
  //  'siteo-template-admin': './src/template-admin.js',

  },

  output: {
    path: path.resolve(__dirname, '../' + DIR_RESOURCE),
    publicPath: 'dist/',
    filename: 'siteo-[name].js',
    library: "Siteo_[name]",
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



            new webpack.DefinePlugin({
              'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
                //DIR_RESOURCE: JSON.stringify(DIR_RESOURCE)
              //  REQUIRED_VUE: JSON.stringify('2.5.8')
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
