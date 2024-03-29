'use-strict';

module.exports = {
  customSyntax: require('postcss-scss'),
	plugins: ['stylelint-scss'],
  rules: {
    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,

    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    'number-leading-zero': 'always',
    'number-no-trailing-zeros': null,
    'length-zero-no-unit': true,

    'string-no-newline': true,
    'string-quotes': 'single',

    'unit-case': 'lower',
    'unit-no-unknown': true,
    'unit-allowed-list': ['px', '%', 'fr', 'deg', 's', 'ms', 'em', 'rem', 'vh', 'vw', 'vmin'],

    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',

    'shorthand-property-no-redundant-values': true,

    'property-case': 'lower',

    'declaration-block-no-duplicate-properties': [ true, {
      'ignore': ['consecutive-duplicates-with-different-values']
    }],
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-newline-after': 'always-multi-line',

    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-before': 'always-multi-line',

    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': [true, { "ignorePseudoElements": ["/part/", "part"] }],
    'selector-type-case': 'lower',
    'selector-max-id': null
  }
};
