import path from 'path';
import webpack from 'webpack';
import htmlwebpackplugin from 'html-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  target: 'web',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug:true
    }),
    new htmlwebpackplugin({
      template: 'src/index.html',

      inject: true
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
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}

