module.exports = {
  "extends": "stylelint-config-standard",

  "rules": {
    "no-empty-source": null,
    "color-hex-length": null,
    "shorthand-property-no-redundant-values": null,
    "max-empty-lines": 2,
    "no-eol-whitespace": [ true, { ignore: ["empty-lines"] } ],
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: [
        "at-root", "debug", "each", "error", "extend", "for", "function", "if", "include", "mixin", "warn", "while" ]
    }],
    "at-rule-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }],
    "selector-pseudo-element-no-unknown": [true, {
      ignorePseudoElements: ["global"]
    }]
  }
}
