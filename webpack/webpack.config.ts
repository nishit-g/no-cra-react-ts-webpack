const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry Point
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  // This allows us to leave off the file extension when importing
  // Example : import App from './App' => Left out tsx extension
  resolve: {
    // File extension resolving order
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    // Webpack should user babel-loader for all ts, js, jsx files,excluding node_modules folder
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  // Webpack should output in build directory, named bundle.js
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  // process.node.ENV = development
  mode: 'development',
  plugins: [
    // This will inject the bundle.js file into the index.html file & place it in the build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
};
