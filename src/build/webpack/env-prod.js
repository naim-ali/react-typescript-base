const TerserPlugin = require('terser-webpack-plugin');

module.exports = function({ isProd }) {
  console.assert(isProd === true);

  return {
    mode: "production",
    optimization: {
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            keep_fnames: true,
          },
          mangle: {
            keep_fnames: true,
          },
          keep_fnames: true,
        },
      })],
    },
  };
};
