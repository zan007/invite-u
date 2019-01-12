// const config = require("./config");

module.exports = function(env) {
  // const env = config.production ? "prod" : "dev";

  console.log(env)
  if (env === "production") {
    return require(`./webpack/production.js`)
  }

  return require(`./webpack/development.js`)
}
