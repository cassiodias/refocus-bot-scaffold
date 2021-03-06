/**
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or
 * https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint no-process-env: 0 */

const path = require('path');
// Creates index.html folder and puts it in dist folder
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ZipPlugin = require('zip-webpack-plugin');
const env = process.env.NODE_ENV || 'dev';
const url = require('./config.js')[env].refocusUrl;
const botName = require('./package.json').name;
const Uglify = require('uglifyjs-webpack-plugin');

const config = {

  entry: './web/index.js',

  output: {
    path: path.resolve(__dirname, './web/dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader?compact=true',
        include: [path.resolve(__dirname, 'lib'),
          path.resolve(__dirname, 'web')]
      }, // Code transformer (if file is .js)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
        include: path.resolve(__dirname, 'web')
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader?limit=100000',
        include: path.resolve(__dirname, 'web')
      },
    ]
  },

  node: {
    fs: 'empty'
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'web/index.html',
      url: url + '/v1/',
      name: botName,
    }),
    new ZipPlugin({
      filename: 'bot.zip',
      include: [/\.js$/, /\.html$/],
      exclude: ['public']
    }),
    new Dotenv({
      path: './.env',
      safe: false,
      systemvars: true
    }),
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new Uglify()
  );
}

module.exports = config;
