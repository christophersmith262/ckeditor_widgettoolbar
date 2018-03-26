var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js/dist');
var APP_DIR = path.resolve(__dirname, 'js/src');

var config = {
  entry: {
    'plugins/widgettoolbar/plugin': APP_DIR + '/plugins/widgettoolbar/plugin.js',
    'widgettoolbar': APP_DIR + '/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  plugins: [
  ],
  module : {
    rules: [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-class-properties']
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  externals: {
    jquery: 'jQuery',
    drupal: 'Drupal',
    Backbone: 'Backbone',
    ckeditor: 'CKEDITOR',
  }
};

module.exports = config;
