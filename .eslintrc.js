module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "accessor-pairs": "warn",
    "array-bracket-spacing": "warn",
    "array-callback-return": "warn",
    "arrow-body-style": "warn",
    "arrow-parens": "warn",
    "arrow-spacing": [
      "warn",
      {
        "after": true,
        "before": true
      }
    ],
    "block-scoped-var": "warn",
    "block-spacing": "warn",
    "brace-style": "warn",
    "callback-return": "warn",
    "camelcase": "warn",
    "class-methods-use-this": "warn",
    "comma-dangle": "warn",
    "comma-spacing": [
      "warn",
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": "warn",
    "complexity": "warn",
    "computed-property-spacing": "warn",
    "consistent-return": "off",
    "consistent-this": "warn",
    "curly": "warn",
    "default-case": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "eol-last": "warn",
    "eqeqeq": "warn",
    "func-call-spacing": "warn",
    "func-name-matching": "warn",
    "func-names": "warn",
    "func-style": "warn",
    "generator-star-spacing": "warn",
    "global-require": "warn",
    "guard-for-in": "warn",
    "handle-callback-err": "warn",
    "id-blacklist": "warn",
    "id-length": "off",
    "id-match": "warn",
    "indent": "off",
    "init-declarations": "warn",
    "jsx-quotes": "warn",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": "off",
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "lines-around-comment": "warn",
    "lines-around-directive": "warn",
    "max-depth": "warn",
    "max-len": "off",
    "max-lines": ["warn", 500],
    "max-nested-callbacks": "warn",
    "max-params": "warn",
    "max-statements": ["warn", 15],
    "max-statements-per-line": "warn",
    "multiline-ternary": "warn",
    "new-cap": "warn",
    "new-parens": "warn",
    "newline-after-var": [
      "warn",
      "always"
    ],
    "newline-before-return": "warn",
    "newline-per-chained-call": "warn",
    "no-alert": "warn",
    "no-array-constructor": "warn",
    "no-bitwise": "warn",
    "no-caller": "warn",
    "no-catch-shadow": "warn",
    "no-confusing-arrow": "warn",
    "no-console": "warn",
    "no-continue": "warn",
    "no-div-regex": "warn",
    "no-duplicate-imports": "warn",
    "no-else-return": "warn",
    "no-empty": "warn",
    "no-empty-function": "warn",
    "no-eq-null": "warn",
    "no-eval": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-extra-parens": "warn",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "warn",
    "no-implied-eval": "warn",
    "no-inline-comments": "off",
    "no-invalid-this": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-lonely-if": "warn",
    "no-loop-func": "warn",
    "no-magic-numbers": "off",
    "no-mixed-operators": "warn",
    "no-mixed-requires": "warn",
    "no-multi-spaces": "off",
    "no-multi-str": "warn",
    "no-multiple-empty-lines": "warn",
    "no-native-reassign": "warn",
    "no-negated-condition": "warn",
    "no-negated-in-lhs": "warn",
    "no-nested-ternary": "warn",
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-require": "warn",
    "no-new-wrappers": "warn",
    "no-octal-escape": "warn",
    "no-param-reassign": "warn",
    "no-path-concat": "warn",
    "no-plusplus": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-proto": "warn",
    "no-prototype-builtins": "warn",
    "no-restricted-globals": "warn",
    "no-restricted-imports": "warn",
    "no-restricted-modules": "warn",
    "no-restricted-properties": "warn",
    "no-restricted-syntax": "warn",
    "no-return-assign": "warn",
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "warn",
    "no-spaced-func": "warn",
    "no-sync": "warn",
    "no-tabs": "warn",
    "no-template-curly-in-string": "warn",
    "no-ternary": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": "warn",
    "no-undef": "warn",
    "no-undef-init": "warn",
    "no-undefined": "warn",
    "no-underscore-dangle": "off",
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": "warn",
    "no-unreachable": "warn",
    "no-unused-expressions": "warn",
    "no-unused-vars": "warn",
    "no-use-before-define": "warn",
    "no-useless-call": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "warn",
    "no-void": "warn",
    "no-warning-comments": "warn",
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "object-property-newline": "warn",
    "object-shorthand": "warn",
    "one-var": "off",
    "one-var-declaration-per-line": "warn",
    "operator-assignment": "warn",
    "operator-linebreak": "warn",
    "padded-blocks": "off",
    "prefer-arrow-callback": "warn",
    "prefer-const": "off",
    "prefer-numeric-literals": "warn",
    "prefer-reflect": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "quote-props": "off",
    "quotes": [
      "warn",
      "single"
    ],
    "radix": "warn",
    "require-jsdoc": "warn",
    "rest-spread-spacing": "warn",
    "semi": "warn",
    "semi-spacing": "warn",
    "sort-imports": "warn",
    "sort-keys": "warn",
    "sort-vars": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": "warn",
    "space-in-parens": [
      "warn",
      "never"
    ],
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": "warn",
    "strict": [
      "warn",
      "never"
    ],
    "symbol-description": "warn",
    "template-curly-spacing": "warn",
    "unicode-bom": [
      "warn",
      "never"
    ],
    "valid-jsdoc": "warn",
    "vars-on-top": "warn",
    "wrap-iife": "warn",
    "wrap-regex": "warn",
    "yield-star-spacing": "warn",
    "yoda": [
      "warn",
      "never"
    ]
  }
};
