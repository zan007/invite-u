// const config = require("./config");

module.exports = function() {
  // const env = config.production ? "prod" : "dev";

  return require(`./webpack/development.js`)
}
