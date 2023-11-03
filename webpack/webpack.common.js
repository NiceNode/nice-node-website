const Path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }],
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
      // Adds a non-base64 encoded favicon in the html
      // Google requires a favicon link to show a favicon in search results
      // More: https://developers.google.com/search/docs/appearance/favicon-in-search
      favicon: 'src/images/favicon.png',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/terms.html'),
      filename: 'terms/index.html',
      favicon: 'src/images/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/privacy.html'),
      filename: 'privacy/index.html',
      favicon: 'src/images/favicon.png',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      jquery: "jquery/src/jquery",
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset'
      },
    ],
  },
};
