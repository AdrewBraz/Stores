const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


module.exports= {
  entry: {
    App: './public/js/app.js'
  },
  output: {
    
    path: path.resolve(__dirname, 'public', 'dist'),
  
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'stylus-loader'],
            publicPath: 'style.css'
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }  
    ]
  },

  devtool: 'cheap-inline-module-source-map',
  
  plugins: [
    // here is where we tell it to output our css to a separate file
    new ExtractTextPlugin('style.css'),
    // new SpriteLoaderPlugin()
  ]
};

