
/**
   create path  for files
*/


const path = require('path');

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || "development";
const DIR_RESOURCE = process.env.DIR_RESOURCE || 'dev/dist';

//const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const name_manifet_file = "manifest-server.json";

/**
  From 15 version  of vue-loader, we need use  VueLoaderPlugin
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/**
  extract-text-webpack-plugin  was changed to mini-css-extract-plugin for CSS
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    'siteo-template': './src/template.js',
    // index with template admin
  //  'siteo-template-admin': './src/template-admin.js',

  },

  output: {
    path: path.resolve(__dirname, '../' + DIR_RESOURCE),
    publicPath: 'dist/',
    filename: '[name].js',


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
      )
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
        /* commons: {
           name: 'siteo-commons',
           chunks: 'initial',
           minChunks: 2
         }*/
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
      'axios': 'axios/dist/axios.js',
      'scriptjs': 'scriptjs/dist/script.js',
      'dateformat': 'date-fns/format',


    }
  },

      plugins: [

            /**
              Plugin create manifest.json file
            */
          //  new ManifestPlugin({fileName: name_manifet_file, publicPath: ''}),
            new CleanWebpackPlugin([DIR_RESOURCE], {root:path.resolve(__dirname, '../')}),
            //new CleanWebpackPlugin(['static'], {root:path.resolve(__dirname, 'example/dist')}),

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
        test: /\.scss$/,
        use: [
          'vue-style-loader',
           MiniCssExtractPlugin.loader,    //  'style-loader', // creates style nodes from JS strings
            'css-loader',
           //'postcss-loader',
           'postcss-loader',
           'sass-loader',



        ]
      },

      /**
        like above config
      */
      {
        test: /\.styl$/,
        use: [

          'vue-style-loader',
           MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader',

        ]
      },

      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [

          //MiniCssExtractPlugin.loader,
          'vue-style-loader',
           MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },

};
