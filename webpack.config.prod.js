import path from 'path';
import webpack from 'webpack';
import htmlwebpackplugin from 'html-webpack-plugin';
import webpackmd5hash from 'webpack-md5-hash';
import extractextplugin from 'extract-text-webpack-plugin';
import compressionplugin from 'compression-webpack-plugin';

export default {
  devtool: 'source-map',
  target: 'web',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug:true
    }),
    new htmlwebpackplugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new compressionplugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new extractextplugin('[name].[contenthash].css'),
    new webpackmd5hash(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: extractextplugin.extract('css-loader?sourceMap')
      }
    ]
  }
}

