const path = require("path")

module.exports = {
  entry: "./src/index",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: [
      path.resolve(__dirname, "../src"),
      "node_modules",
    ]
  }
}
