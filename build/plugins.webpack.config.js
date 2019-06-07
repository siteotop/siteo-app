
const path = require('path');
const webpack = require('webpack');
const DIR_RESOURCE=require('./helper/dirResource')('plugins', process.env.NODE_ENV);
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


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
     )

   ],
 },

  // Укажите точку входа серверной части вашего приложения


  entry: {

    'instagram-post':   './src/plugins/instagram-post',
    'forms':   './src/plugins/forms',
    'structure-admin':   './src/plugins/structure-admin',
    'bus':   './src/plugins/bus',
    'project-card':   './src/plugins/project-card',
    'sharing':   './src/plugins/sharing',

  },

  output: {
    path: path.resolve(__dirname, '../dist' + DIR_RESOURCE),
    publicPath: process.env.HOST_PLUGIN + DIR_RESOURCE +'/',
    filename: 'siteo-plugin-[name].js',
    library: ['siteo-plugins', "siteo-plugin-[name]"],
		libraryTarget: "umd",
    libraryExport: 'default',

  },

  plugins: [
    /**Vue Loader */
    new VueLoaderPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })

  ],

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
          include: [path.resolve(__dirname, '../src')]
        },


        /**
          was created  by this documentation https://webpack.js.org/loaders/sass-loader/
          and Vue Loader  https://vue-loader.vuejs.org/migrating.html#css-extraction

        */
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
          //  process.env.NODE_ENV !== 'production'? 'vue-style-loader':undefined,
            {
            loader: 'css-loader',
            options: {
                // enable CSS Modules
                modules: true,
                // customize generated class names
                localIdentName: '[local]_[hash:base64:8]'
              }
            },
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
          //  process.env.NODE_ENV !== 'production'? 'vue-style-loader':undefined,
            'css-loader',
            'postcss-loader',
            'stylus-loader',

          ]
        },

  ]
}
};
