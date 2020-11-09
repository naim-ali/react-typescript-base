const path = require("path");
const fs = require("fs");
const shell = require("shelljs");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfigFactory = require("../../../webpack.config");

module.exports = function(buildSettings) {
  function cleanDest(done) {
    const folder = buildSettings.paths.dest;
    console.info("Cleaning: " + folder);
    shell.rm("-rf", folder);
    done();
  }

  function getAppConfigFilePath(configName) {
    return path.join(buildSettings.paths.appConfig, configName + ".json");
  }

  // Copy `default.json` or `_local.json` to `_temp.json`.
  // `_temp.json` gets included  in the project via webpack loader.
  function copyAppConfig(done) {
    let srcConfigPath = null;

    if (!buildSettings.isProd) {
      // Use `_local.json` if it exists.
      const localConfig = getAppConfigFilePath("_local");
      if (fs.existsSync(localConfig)) {
        console.info("Using local app config file.");
        srcConfigPath = localConfig;
      }
    }

    if (!srcConfigPath) {
      // Use `default.json`
      srcConfigPath = getAppConfigFilePath("default");
      if (!fs.existsSync(srcConfigPath)) {
        throw new Error(`Can't find app config file: ${srcConfigPath}`);
      }
    }

    const destConfigPath = getAppConfigFilePath("_temp");

    shell.cp(srcConfigPath, destConfigPath);

    done();
  }

  // function copyWebConfig(done) {
  //   const destFolder = buildSettings.paths.dest;
  //   shell.mkdir("-p", destFolder); // create dest folder if needed

  //   const srcPath = path.resolve(__dirname, "..", "iis-web-config.xml");
  //   const destPath = path.resolve(destFolder, "web.config");
  //   shell.cp(srcPath, destPath);

  //   done();
  // }

  function shellExec(command, options) {
    if (options && options.isAsync === true) throw new Error("Async not supported.");

    const result = shell.exec(command, options);

    // const isAsync = (options || { async: false }).async;
    // if (!isAsync && result.code !== 0) {
    //   shell.echo("Process exited with code: " + result.code);
    //   process.exit(result.code);
    // }
  }

  function build(done) {
    const { analyze, env } = buildSettings;
    //Make sure node_modules/.bin is in node's path variable
    process.env.PATH += path.delimiter + path.join(__dirname, "..", "node_modules", ".bin");
    //Profiling can blow the heap so allocate webpack 4GB of memory (temporary workaround)
    const executable = analyze
      ? "node --max_old_space_size=4096 ./node_modules/webpack/bin/webpack.js"
      : "webpack";
    let buildCommand = `${executable} --env.env=${env}`;
    //Output build stats to json file
    if (analyze) buildCommand += ` --profile --json > ./dist/${env}/stats.json`;

    shellExec(buildCommand);

    //Process stats file and render report
    if (buildSettings.analyze) shellExec(`webpack-bundle-analyzer ./dist/${env}/stats.json`);

    done();
  }

  function devServer(done) {
    console.assert(!buildSettings.isProd);
    console.assert(buildSettings.isWebpackDevServer);

    const webpackConfig = webpackConfigFactory(buildSettings);
    const compiler = webpack(webpackConfig);
    const server = new WebpackDevServer(compiler, webpackConfig.devServer);
    server.listen(webpackConfig.devServer.port, "localhost", () => {
      // Close server port on unexpected errors
      process.on("exit", () => {
        server.close();
        done();
      });
    });
  }

  return {
    cleanDest,
    copyAppConfig,
    build,
    devServer,
  };
};
