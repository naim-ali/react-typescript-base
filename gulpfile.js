const gulp = require("gulp");

const args = require("yargs").argv;
const getBuildSettings = require("./src/build/buildSettings");

const env = args.env === "prod" ? "prod" : "dev";
const analyze = args.analyze !== undefined;
const isWebpackDevServer = !!args.webpackDevServer;
const buildSettings = getBuildSettings(env, isWebpackDevServer, analyze);
console.info("Build Environment: " + env);

const taskFactory = require("./src/build/gulp/tasks.js");
const tasks = taskFactory(buildSettings);

const copyConfigFiles = gulp.parallel(tasks.copyAppConfig);
const build = gulp.series(tasks.cleanDest, copyConfigFiles, tasks.build);
const serve = gulp.series(tasks.copyAppConfig, tasks.devServer);

module.exports = {
  build,
  serve,
};
