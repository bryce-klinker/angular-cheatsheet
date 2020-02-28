const webpack = require("@cypress/webpack-preprocessor");

module.exports = on => {
  const options = {
    webpackOptions: require("../webpack.cypress.js")
  };
  on("file:preprocessor", webpack(options));
};
