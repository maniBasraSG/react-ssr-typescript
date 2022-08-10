const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;
const imageExtensions = /\.(bmp|gif|jpg|jpeg|png)$/;
const fontsExtension = /\.(eot|otf|ttf|woff|woff2)$/;

require('dotenv').config();

// dev mode
const devMode = process.env.MODE === 'development';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // webpack has some built in asset modules you can use for static assets.
      {
        test: fontsExtension,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
      {
        test: imageExtensions,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
