

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const html_template= 'build/template.html';
const webpack = require('webpack');

/**
  extract-text-webpack-plugin  was changed to mini-css-extract-plugin for CSS
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/**
  index.html for siteo without ssr rendering
*/

const createDirResource = require('./helper/dirResource');
const DIR_RESOURCE=createDirResource('assets', process.env.NODE_ENV);













module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist' + DIR_RESOURCE),
    publicPath: process.env.HOST_STATIC + DIR_RESOURCE +'/',
    filename: 'siteo-[name].js',
    library: "siteo-[name]",
		libraryTarget: "umd",
    libraryExport: 'default',
    chunkFilename: "siteo-chunk-[name].js"

  },
  entry: {
    'polyfill': '@babel/polyfill',
    'core': './src/client.js',
  },


  optimization: {
      minimizer: [

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

    plugins: [
      new HtmlWebpackPlugin({
       template:html_template,
       filename: path.resolve(__dirname, "../public")+ '/index.html',
       //inject: false,
       templateParameters: {
           html_attr: "",
           title: "<title>siteo-template</title>",
           body_content: '<div id="app"></div>',
           body_state: '',
           siteo_config: JSON.stringify({baseUrl: '/', lang: 'en'}),
           siteo_instance: '',
           path_icon: process.env.PATH_ICON
       }
     }),



     /**
       index.ssr.html for siteo which is genereting using ssr
     */
      new HtmlWebpackPlugin({
        template: html_template,
        filename: path.resolve(__dirname, "../ssr/template")+ '/index.ssr.html',
        //inject: false,
        minify: false,
        templateParameters: {
            html_attr: 'data-vue-meta-server-rendered {{{meta.inject().htmlAttrs.text()}}}' ,
            title: `{{{ meta.inject().title.text() }}}
            {{{ meta.inject().meta.text() }}}
            {{{ meta.inject().link.text() }}}
            {{{ meta.inject().style.text() }}}`,
            body_content: '<!--vue-ssr-outlet-->',
            body_state: '{{{renderState()}}}',
            siteo_config: '{{{JSON.stringify(configs_frontend)}}}',
            siteo_instance: '',
            path_icon: process.env.PATH_ICON
        }
      }),
      /**
        index.ssr.plain.html for siteo which is genereting using ssr and start how plain index html
      */

      new HtmlWebpackPlugin({
       template: html_template,
       filename: path.resolve(__dirname, "../ssr/template")+ '/index.ssr.plain.html',
       //inject: false,
       templateParameters: {
           html_attr: "",
           title: "<title>siteo-template</title>",
           body_content: '<div id="app"></div>',
           body_state: '',
           siteo_config: '<%= __SITEO_CONFIG__ %>',
           siteo_instance: 'window.__SITEO_INSTANCE__ = <%= __SITEO_INSTANCE__ %>',
           path_icon: process.env.PATH_ICON

       }
     }),
      new webpack.DefinePlugin({
        'process.env': {
           NODE_ENV: JSON.stringify(process.env.NODE_ENV),
           HOST_API: JSON.stringify(process.env.HOST_API_FRONTEND),
           STATIC_PLUGINS: JSON.stringify(process.env.HOST_PLUGIN+ createDirResource('plugins', process.env.NODE_ENV) +'/' )
        }
      }),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css",
          chunkFilename: "[name].css"
        })
    ],

    module: {

      rules: [
        /**
          was created  by this documentation https://webpack.js.org/loaders/sass-loader/
          and Vue Loader  https://vue-loader.vuejs.org/migrating.html#css-extraction

        */
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            process.env.NODE_ENV !== 'production'
             ? 'vue-style-loader'
             : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                  implementation: require('sass'),
                //fiber: require('fibers')
              }
            }
          ],
        },

        /**
          like above config
        */
        {
          test: /\.styl$/,
          use: [

            // https://vue-loader.vuejs.org/guide/extract-css.html#webpack-4
            process.env.NODE_ENV !== 'production'
             ? 'vue-style-loader'
             : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'stylus-loader',

          ]
        },

        // added after error Leaflet
        {
          //|woff|woff2|eot|ttf|svg
          test:  /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          }
          //loader: 'ignore-loader'
        }
      ]
    }
} );
