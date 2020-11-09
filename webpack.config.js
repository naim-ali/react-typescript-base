const path = require('path');
const webpack = require('webpack');
const webpackMerge = require("webpack-merge");
const getBuildSettings = require("./src/build/buildSettings");

function getWebpackConfig(env = 'dev', isWebpackDevServer = false) {

  const settings = getBuildSettings(env, isWebpackDevServer);

  const webpackFolder = "./src/build/webpack/";

  const commonConfig = require(webpackFolder + "common")(settings);
  const loaderConfig = require(webpackFolder + "loaders")(settings);
  const cssConfig = require(webpackFolder + "css")(settings);
  const envConfig = require(webpackFolder + "env-" + env)(settings);

  return webpackMerge(commonConfig, loaderConfig, cssConfig, envConfig);
}

module.exports = function ({ env, isWebpackDevServer } = { env: 'dev', isWebpackDevServer: false }) {

  try {
    return getWebpackConfig(env, !!isWebpackDevServer);
  }
  catch (e) {
    console.error(e);
      throw new Error("WebPack configuration error: ", e.message);
  }
};
