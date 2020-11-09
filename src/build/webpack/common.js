const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const pkg = require("../../../package.json");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const IgnoreNotFoundExportPlugin = require("./IgnoreNotFoundExportPlugin");

const timestamp = new Date();

function dynamicChunkNameResolver(chunk) {
  if (chunk.name) {
    return chunk.name;
  }

  // eslint-disable-next-line no-underscore-dangle
  return [...chunk._modules]
    .map(m =>
      path.relative(
        m.context,
        m.userRequest.substring(0, m.userRequest.lastIndexOf("."))
      )
    )
    .join("_");
}

module.exports = function({
  env,
  isProd,
  vendorChunkName,
  buildFolder,
  paths,
  isWebpackDevServer,
  webpackDevServerPort,
}) {
  const config = {
    entry: {
      boot: path.join(paths.appSrc, "boot"),
    },

    output: {
      path: paths.dest,
      pathinfo: !isProd,
      filename: `[name]${isWebpackDevServer ? "" : "-[chunkhash]"}.js`,
      chunkFilename: `[name]${isWebpackDevServer ? "" : "-[chunkhash]"}.js`, // Note: Applies to on-demand-loaded chunks
      publicPath: "/",
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    plugins: [
      new webpack.DefinePlugin({
        BUILD_INFO: JSON.stringify({
          env,
          isProd,
          version: pkg.version,
          timestamp,
        }),
      }),
      //Only load locales we support from momentjs
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-us|en-gb/),
      // ------------------------------------
      // Long Term Caching
      // ------------------------------------
      // More information https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31
      new webpack.NamedChunksPlugin(dynamicChunkNameResolver),
      new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
      new htmlWebpackPlugin({
        title: "Orion - Collaboration",
        filename: "index.html",
        favicon: path.join(paths.appSrc, "assets/images/favicon.ico"),
        inject: false, // our custom template handles injections
        template: path.join(__dirname, "./index.html.ejs"),
      }),

      //Started by adding a list of interfaces but there are just too many
      //We need a large scale refactor to remove interfaces from the same files as other exports
      new IgnoreNotFoundExportPlugin(),
    ],
    optimization: {
      runtimeChunk: "single", //re-use webpack's code and manifest
      namedModules: true,
      moduleIds: "hashed",
      splitChunks: {
        chunks: "all", //prevents duplication
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: vendorChunkName,
          },
        },
      },
    },
  };

  return config;
};
