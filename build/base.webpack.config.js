
/**
   create path  for files
*/

const path = require('path');



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


const siteoConfigs = require(path.resolve(__dirname, './configs.js')).backend;



module.exports = {
  mode:  siteoConfigs.NODE_ENV,
  devtool:  siteoConfigs.NODE_ENV ==  'development' ? "source-map" : false,
  watch: siteoConfigs.NODE_ENV ==  'development',  // наблюдение за изменяемыми файлами



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



        /**Vue Loader */
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),

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
          siteoConfigs.NODE_ENV !== 'production'
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
          siteoConfigs.NODE_ENV !== 'production'
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
