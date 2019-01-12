const path = require("path");
const common = require("./common");
const loaders = require("./loaders");
const plugins = require("./plugins");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pathResolve = (dir) => path.resolve(__dirname, `../${dir}`);

module.exports = Object.assign(
  common,
  {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[id].[hash].js",
      chunkFilename: "[id].[hash].js",
    },
    module: {
      rules: [
        loaders.js,
        loaders.scss,
        //loaders.scssExtracted,
        loaders.css,
        loaders.fonts,
        loaders.images,
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: pathResolve("server/")
        }
      ]),
      plugins.indexHtml(),
      plugins.copyStatics(),
      plugins.extractCSS(),
      plugins.aggressiveMerging(),
      plugins.config(),
    ],
  }
)
