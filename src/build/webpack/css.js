const path = require("path");
const merge = require("lodash/merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const moduleCssFileSuffix = ".m.scss";
const moduleCssFileSuffixLength = moduleCssFileSuffix.length;

// Factory function to create CSS class identifiers for CSS modules (*.m.scss).
// If a style named `myStyle` is defined in: `c:\something\app\src\components\some\folder\component.m.scss`,
// returns: `some-folder-component-myStyle`.
// Automation tests rely on this pattern being maintained
function cssModuleLocalIdentifierCreator(componentRootFolder) {
  const disallowedFileNameChars = new RegExp("[^a-zA-Z0-9\\-_\u00A0-\uFFFF]", "g");
  const disallowedFirstChar = /^((-?[0-9])|--)/;
  return function(loaderContext, localIdentName, localName, options) {
    const filePath = loaderContext.resourcePath;
    const relativePath = path.relative(componentRootFolder, filePath);
    const pathPieces = relativePath.split("/",2);
    const componentDir = pathPieces[0];
    const componentName = pathPieces[1];
    const moduleName = componentName.substring(0, componentDir.length);
    const relativePathWithExt = componentDir === moduleName ? pathPieces[1] :  relativePath;
    const relativePathWithoutExt = relativePathWithExt.substr(0,relativePathWithExt.length - moduleCssFileSuffixLength);
    const transformedPath = relativePathWithoutExt
      .replace(disallowedFileNameChars, "-")
      .replace(disallowedFirstChar, "_$1");
    
    const id = transformedPath === localName ? localName : transformedPath + "-" + localName;
    return id.toLowerCase();
  };
}

function loaderConfig(paths, isWebpackDevServer) {
  const sassLoader = {
    loader: "sass-loader",
    options: {
      sourceMap: false,
      sourceComments: false, // Note: Results in size increase of around 300K
    },
  };

  const globalCssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: false,
      minimize: true
    },
  };

  const moduleCssLoader = merge({}, globalCssLoader, {
    options: {
      modules: true,
      localIdentName: "*ignored*", //[name]-[local]-[hash:base64:12]',
      getLocalIdent: cssModuleLocalIdentifierCreator(path.join(paths.appSrc, "components")),
    },
  });

  const styleLoader = isWebpackDevServer ? 'style-loader' : MiniCssExtractPlugin.loader;

  return [
    // Third-party CSS
    {
      test: /\.css$/,
      include: [path.resolve("./node_modules")],
      use: [styleLoader, "css-loader"],
    },
    // Global SASS
    {
      test: /\.scss$/,
      exclude: /\.m\.scss$/,
      include: [path.resolve("./src")],
      use: [styleLoader, globalCssLoader, sassLoader],
    },
    // SASS Modules
    {
      test: /\.m\.scss$/,
      include: [path.resolve("./src")],
      use: [styleLoader, moduleCssLoader, sassLoader],
    },
  ];
}

function pluginConfig(isWebpackDevServer) {
  if (isWebpackDevServer) {
    return [];
  }

  const hashSpec = '-[contenthash:12]';
  return [
    new MiniCssExtractPlugin({
      filename: `assets/css/[name]${hashSpec}.css`,
      chunkFilename: `assets/css/[id]${hashSpec}.css`,
      allChunks: true,
    }),
  ];
}

module.exports = function({ paths, isWebpackDevServer }) {
  return {
    module: {
      rules: [...loaderConfig(paths, isWebpackDevServer)],
    },

    plugins: [...pluginConfig(isWebpackDevServer)],
  };
};
