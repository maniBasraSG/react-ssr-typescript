const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('../webpack.base.js');
const ROOT_DIR = path.resolve(__dirname, '../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('build');

const serverConfig = {
  target: 'node',
  mode: 'production',
  name: 'bundle',
  entry: {
    server: './src/server/index.jsx',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
      ignoreOrder: true,
    }),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
    chunkFilename: 'chunks/[name].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
