// IgnoreNotFoundExportPlugin.js
const ModuleDependencyWarning = require("webpack/lib/ModuleDependencyWarning");

// ↓ Based on https://github.com/sindresorhus/escape-string-regexp
const escapeStringForRegExp = string => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");

/**
 This resolves a typescript issue exporting interfaces.
 The typescript compiler emits no code for interfaces,
 so webpack can not find them in the compiled module;
 except when a module consists of only interfaces.
 In that case the module will end up completely empty
 and then webpack will not investigate the exports.
 @source https://github.com/TypeStrong/ts-loader/issues/653#issuecomment-444266993
 @summary Ignores export warnings for the passed interfaces or ALL interfaces if none supplied
*/
module.exports = class IgnoreNotFoundExportPlugin {
  constructor(exportsToIgnore) {
    this.exportsToIgnore = exportsToIgnore || [];
  }

  getMessageRegExp() {
    if (!this.exportsToIgnore.length)
      return /export '.*'( \(reexported as '.*'\))? was not found in/;

    const exportsPattern = "(" + this.exportsToIgnore.map(escapeStringForRegExp).join("|") + ")";
    return new RegExp(`export '${exportsPattern}'( \\(reexported as '.*'\\))? was not found in`);
  }

  apply(compiler) {
    const messageRegExp = this.getMessageRegExp();

    const doneHook = stats => {
      stats.compilation.warnings = stats.compilation.warnings.filter(warn => {
        if (warn instanceof ModuleDependencyWarning && messageRegExp.test(warn.message)) {
          return false;
        }
        return true;
      });
    };

    if (compiler.hooks) {
      compiler.hooks.done.tap("IgnoreNotFoundExportPlugin", doneHook);
    } else {
      compiler.plugin("done", doneHook);
    }
  }
};
