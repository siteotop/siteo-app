
const path = require('path');
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./base.webpack.config.js')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const webpack = require('webpack');

// Этот плагин преобразует весь результат серверной сборки
// в один JSON-файл. Имя по умолчанию будет
// `vue-ssr-server-bundle.json`



module.exports = merge(baseConfig, {
  // Укажите точку входа серверной части вашего приложения
  entry: './ssr/entry-server.js',

  // Это позволяет Webpack обрабатывать динамические импорты в Node-стиле,
  // а также сообщает `vue-loader` генерировать серверно-ориентированный код
  // при компиляции компонентов Vue.
  target: 'node',

  // Для поддержки source map в bundle renderer

  // Это сообщает что в серверной сборке следует использовать экспорты в стиле Node
  output: {
    path: path.resolve(__dirname, '../ssr/dist'),
    //publicPath: 'server/',
    filename: 'built-server-bundle.js',
    libraryTarget: 'commonjs2'
  },




  // https://webpack.js.org/configuration/externals/#function
  // https://github.com/liady/webpack-node-externals
  // Внешние зависимости приложения. Это значительно ускоряет процесс
  // сборки серверной части и уменьшает размер итогового файла сборки.
  //externals: nodeExternals({
    // не выделяйте зависимости, которые должны обрабатываться Webpack.
    // здесь вы можете добавить больше типов файлов, например сырые *.vue файлы
    // нужно также указывать белый список зависимостей изменяющих `global` (например, полифиллы)
    // whitelist: /\.css$/
  //})
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
         NODE_ENV: JSON.stringify(process.env.NODE_ENV),
         HOST_API: JSON.stringify(process.env.HOST_API),
         SSR: JSON.stringify("on")
      }
    }),
    new VueSSRServerPlugin()
  ],
  module: {
    rules: [
      { test: /\.(sa|sc|c)ss$/, loader: 'ignore-loader' },
      { test: /\.styl$/, loader: 'ignore-loader' },
      {
        //|woff|woff2|eot|ttf|svg
        test:  /\.(png|jpe?g|gif)$/i,
        loader: 'ignore-loader',

      },
    ]
  }

})
