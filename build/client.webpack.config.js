

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const html_template= 'build/template.html';
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

/**
  extract-text-webpack-plugin  was changed to mini-css-extract-plugin for CSS
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/**
  index.html for siteo without ssr rendering
*/

const createDirResource = require('./helper/dirResource');
//const DIR_RESOURCE=createDirResource('assets', process.env.NODE_ENV);

const DIR_RESOURCE = '/assets';
const isProd = process.env.NODE_ENV ==  'production';
const VERSION = process.env.npm_package_version;











module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist' + DIR_RESOURCE),
    publicPath: process.env.HOST_STATIC + DIR_RESOURCE +'/',
    filename: `siteo-[name]-${VERSION}.js`,
    //library: "siteo-[name]",
		//libraryTarget: "umd",
    //libraryExport: 'default',
    chunkFilename: isProd? "[name].[hash].js": "[name].js"

  },
  entry: {
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
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router|vue-meta)[\\/]/,
            chunks: 'all',
            //name: `vue-vendors`,
            filename: `vue-vendors-${VERSION}.js`
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
        // Якщо файли будуть зверху, то вони почнуть завантажуватися паралельно потоку. Це краще, чим вони почнуть завантажуватися після обробки html
        scriptLoading: 'defer',
        //inject: false,
        minify: false,
        templateParameters: {
            html_attr: 'data-vue-meta-server-rendered {{{meta.inject().htmlAttrs.text()}}}' ,
            title: `{{{ meta.inject().title.text() }}}
            {{{ meta.inject().meta.text() }}}
            {{{ meta.inject().link.text() }}}
            {{{ meta.inject().style.text() }}}
            {{{ renderResourceHints() }}}
            `,  //https://ssr.vuejs.org/ru/guide/build-config.html#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BAn%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D1%87%D0%B0%D1%81%D1%82%D0%B8
                //{{{ renderStyles()}}}
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
           PATH_ICON: JSON.stringify(process.env.PATH_ICON),
        }
      }),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: `[name]-${VERSION}.css`,
          chunkFilename: "[name].[hash].css"
        }),

      new VueSSRClientPlugin()
    ],

    module: {

      rules: [

        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "ie 11" }]
            ],
            plugins: [/*'@babel/plugin-transform-runtime', не хотіло з цим плагіном працювати*/"@babel/plugin-syntax-dynamic-import"]
          }
        /*  include: [
              path.resolve(__dirname, '../src'),
              path.resolve(__dirname, '../node_modules/vue-awesome'),
             //  path.resolve(__dirname, 'node_modules/vuetify/src'),
              path.resolve(__dirname, '../node_modules/vuetify/lib/components'),
            ]*/
        },
        /**
          was created  by this documentation https://webpack.js.org/loaders/sass-loader/
          and Vue Loader  https://vue-loader.vuejs.org/migrating.html#css-extraction

        */
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            !isProd
             ? 'vue-style-loader'
             : MiniCssExtractPlugin.loader,
             {
               loader: 'css-loader',

             },
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
            !isProd
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
