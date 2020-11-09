const path = require('path');

function getSettings(env = 'dev', isWebpackDevServer = false, analyze = false) {
  console.assert(env === "dev" || env === "prod");
  const isProd = (env === "prod");

  const settings = {
    env,
    isProd,
    isWebpackDevServer,
    webpackDevServerPort: 3001,
    vendorChunkName: 'libs',
    srcFolder: "src",
    buildFolder: path.join("dist", env),
    analyze
  };

  const projectRootPath = path.resolve(__dirname, "..", "..");
  const appSrcPath = path.resolve(projectRootPath, settings.srcFolder, "app");

  settings.paths = {
    root: projectRootPath,
    src: path.join(projectRootPath, settings.srcFolder),
    dest: path.join(projectRootPath, settings.buildFolder),
    appSrc: appSrcPath,
    appConfig: path.join(appSrcPath, "config")
  };

  return settings;
}

module.exports = getSettings;
