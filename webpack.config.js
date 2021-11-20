const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const { PORT: port, NODE_ENV: mode } = process.env;
const devServer = {
  port,
};

module.exports = {
  mode,
  devServer,
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React!',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],

  // loaders
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'linkTag',
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash].[ext]',
            },
          },
        ],
      },

      {
        test: /\.(jpeg|png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
