const webpack = require('webpack');
const webpackMerge = require("webpack-merge");
const SourceMapsPlugin = webpack.SourceMapDevToolPlugin;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = function ({ isProd, isWebpackDevServer, webpackDevServerPort }, contentBase = '/') {

  console.assert(isProd === false);

  const config = {
    mode: 'development',
    devtool: false, //Needs to be explicit as assumes eval default in development mode
    //watch: true, - default in development mode
    plugins: [
      new SourceMapsPlugin({
        test: /^(app|login)(-[^\.]+)?\.js$/,
        filename: `[name]${isWebpackDevServer ? '' : '-[chunkhash]'}.js.map`,
        columns: false
      }),
      new CopyPlugin([
        {
          from: 'src/app/config/_temp.json',
          to: 'config.json',
        },
      ])
    ]
  }

  if (!isWebpackDevServer)
    return config;

  return webpackMerge(config, {

    entry: {
      webpackDevServer: `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`
    },

    devServer: {
        inline: true,
        port: webpackDevServerPort,
        hot: false,
        contentBase,
        historyApiFallback: true,
        noInfo: false,
        compress: true,
        stats: 'minimal',
        disableHostCheck: true
    },

    module: {
        rules: [
          // Need to fix up csd.phoenix.models source map resolution before enabling this.
          // {
          // enforce: 'pre',
          // test: /\.(js|css)$/,
          // loader: "source-map-loader"
          // },
          {
              enforce: 'pre',
              test: /\.tsx?$/,
              use: "source-map-loader"
          }
        ]
    }
  });
};
