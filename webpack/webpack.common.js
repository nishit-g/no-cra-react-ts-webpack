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
      // Rule for loading css files using style-loader and css-loader
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
      // Rule for files with these extensions, asset/resource module type should be used.
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
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
