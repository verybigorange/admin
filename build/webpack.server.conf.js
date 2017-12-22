const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path =  require("path");
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader.conf')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }

module.exports = {
    target:"node",
    entry:{
        app:path.resolve(__dirname,"../src/serverEntry.js")
    },
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:'server.js',
        libraryTarget:'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          'assets': path.resolve(__dirname, '../src/assets'),
          'components': path.resolve(__dirname, '../src/components'),
          'views': path.resolve(__dirname, '../src/views'),
          'admin': path.resolve(__dirname, '../src/views/administrator'),
          'client':path.resolve(__dirname, '../src/views/client'),
          'api': path.resolve(__dirname, '../src/api'),
          'utils': path.resolve(__dirname, '../src/utils'),
        }
      },
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: vueLoaderConfig
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src')]
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            },
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
          }
        ]
      },
      plugins:[
        new FriendlyErrorsPlugin()
      ]
}