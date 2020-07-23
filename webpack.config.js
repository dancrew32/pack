const path = require('path');

// Plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const fileRule = {
  test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
  use: 'file-loader',
};

const csvRule = {
  test: /\.(csv|tsv)$/,
  use: 'csv-loader',
};

const xmlRule = {
  test: /\.xml$/,
  use: 'xml-loader',
};

const typeScriptRule = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

const rules = [
  typeScriptRule,
  cssRule,
  fileRule,
  csvRule,
  xmlRule,
];

const cleanPlugin = new CleanWebpackPlugin({
  cleanStaleWebpackAssets: false,
});

const entry = {
  app: './src/app.tsx',
};

const plugins = [
  cleanPlugin,
];

const output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
};

const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
};

const devTool = 'inline-source-map';

module.exports = {
  devtool: devTool,
  entry: entry,
  plugins: plugins,
  output: output,
  resolve: resolve,
  module: {
    rules: rules,
  },
};
