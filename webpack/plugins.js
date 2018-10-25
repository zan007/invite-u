const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CONFIG = require("../config")

module.exports = {
  indexHtml() {
    return new HtmlWebpackPlugin({
      template: "./src/index.html"
    });
  },
  copyStatics() {
    return new CopyWebpackPlugin([
      {
        from: 'src/assets/img',
        to: 'assets/img'
      },
      {
        from: 'src/assets/fonts',
        to: 'assets/fonts'
      },
    ]);
  },
  aggressiveMerging() {
    return new webpack.optimize.AggressiveMergingPlugin();
  },
  extractCSS() {
    return new ExtractTextPlugin("[hash].css");
  },
  config() {
    return new webpack.DefinePlugin({
      __CONTENTFUL_SPACE_ID__: JSON.stringify(CONFIG.CONTENTFUL_SPACE_ID),
      __CONTENTFUL_ACCESS_TOKEN__: JSON.stringify(CONFIG.CONTENTFUL_ACCESS_TOKEN),
      __GOOGLE_MAPS_API_KEY__: JSON.stringify(CONFIG.GOOGLE_MAPS_API_KEY),
    })
  }
};
