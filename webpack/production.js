const path = require("path")
const common = require("./webpack.common")
const loaders = require("./webpack.loaders")
const plugins = require("./webpack.plugins")

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
        loaders.css,
        loaders.scssExtracted,
        loaders.fonts,
        loaders.images,
      ]
    },
    plugins: [
      plugins.indexHtml(),
      plugins.copyStatics(),
      plugins.extractCSS(),
      plugins.aggressiveMerging(),
      plugins.config(),
    ],
  }
)
