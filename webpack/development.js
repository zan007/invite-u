const path = require("path")
const common = require("./common")
const loaders = require("./loaders")
const plugins = require("./plugins")

module.exports = Object.assign(
  common,
  {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    devServer: {
      port: "8080",
    },
    module: {
      rules: [
        loaders.js,
        loaders.scss,
        loaders.fonts,
      ]
    },
    plugins: [
      plugins.indexHtml(),
      plugins.copyStatics(),
      plugins.config(),
    ],
  }
)
