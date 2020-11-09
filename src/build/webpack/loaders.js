
function typescriptLoader({ isProd, isWebpackDevServer }) {
  // Ref: https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79
  const loaders = [
    'cache-loader',
    {
      loader: 'thread-loader',
      options: {
        // We leave one cpu available for the `fork-ts-checker-webpack-plugin`
        workers: Math.max(1, require('os').cpus().length - 1),
        workerParallelJobs: 2
      },
    },
    {
      loader: 'ts-loader',
      options: Object.assign({
        onlyCompileBundledFiles: true,
        happyPackMode: true
      }, isProd ? { configFile: 'tsconfig.prod.json' } : {})
    }
  ];

  return {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: loaders
  }
}




function assetLoader() {

    const outputFileSpec = "[name]-[hash:base64:12].[ext]";
    const outputPath = "assets/";
    //const publicPath = "/" + outputPath;

    return [
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: "file-loader",
                options: {
                    name: outputFileSpec,
                    outputPath: outputPath + "fonts/",
                }
            }
        },
        {
            test: /\.jpg$/,
            use: {
                loader: "file-loader",
                options: {
                    name: outputFileSpec,
                    outputPath: outputPath + "images/",
                }
            }
        },
        {
            test: /\.(png|gif|svg)$/,
            use: {
                loader: "url-loader",
                options: {
                    name: outputFileSpec,
                    outputPath: outputPath + "images/",
                    limit: 2048
                }
            }
        },
        /*{
          type: 'javascript/auto',
          test: /\.(json)$/,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            },
          },
        }*/
    ];
}



module.exports = function (settings) {
    return {
        module: {
            rules: [
                typescriptLoader(settings),
                ...assetLoader(settings)
            ]
        }
    }
}

