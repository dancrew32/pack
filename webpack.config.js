const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const fileRule = {
  test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
  use: ['file-loader'],
};

const csvRule = {
  test: /\.(csv|tsv)$/,
  use: ['csv-loader'],
};

const xmlRule = {
  test: /\.xml$/,
  use: ['xml-loader'],
};

const rules = [
  cssRule,
  fileRule,
  csvRule,
  xmlRule,
];

const htmlPlugin = new HtmlWebpackPlugin({
  title: '',
});

const cleanPlugin = new CleanWebpackPlugin({
  cleanStaleWebpackAssets: false,
});

const entry = {
  app: './src/app.js',
};

const plugins = [
  htmlPlugin,
  cleanPlugin,
];

const output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
};

module.exports = {
  entry: entry,
  plugins: plugins,
  output: output,
  module: {
    rules: rules,
  },
};
