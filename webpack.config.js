var path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports ={
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
 module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ],   
    },
  devServer: {
    historyApiFallback: true
  },
   plugins: [new HTMLWebpackPlugin({
    template: 'app/index.html'
  })]
}