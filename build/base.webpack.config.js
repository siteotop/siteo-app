
/**
   create path  for files
*/

const path = require('path');

/**
  From 15 version  of vue-loader, we need use  VueLoaderPlugin
*/
const VueLoaderPlugin = require('vue-loader/lib/plugin')

/**
  minimization plugin
*/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
  Cpoy files
*/


module.exports = {
  mode:  process.env.NODE_ENV,
  devtool:  process.env.NODE_ENV ==  'development' ? "source-map" : false,
  watch: process.env.NODE_ENV ==  'development',  // наблюдение за изменяемыми файлами



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

     ],



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
            path.resolve(__dirname, '../node_modules/vuetify/lib/components'),
          ]
      }
    ]
  },

};
