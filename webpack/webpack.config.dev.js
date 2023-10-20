const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
// const StylelintPlugin = require('stylelint-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ['./src/index.html','./src/js/index.js', './src/sass/index.scss'],
  target: 'web',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    client: {
      logging: 'error',
    },
    hot: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      // Strings need to be stringified here
      // See https://webpack.js.org/plugins/define-plugin/#usage for more
      // When changing these, you have to re-run `npm start` on each change
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.MIXPANEL_TOKEN' : JSON.stringify('fake-token')
    }),
    new ESLintPlugin({
      extensions: 'js',
      emitWarning: true,
      files: Path.resolve(__dirname, '../src'),
    }),
    // new StylelintPlugin({
    //   files: Path.join('src', '**/*.s?(a|c)ss'),
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require("dart-sass"),
            },
          }
        ],
      },
    ],
  },
});
