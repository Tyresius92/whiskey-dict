module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint', 'testing-library'],
  rules: {
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'array-callback-return': 'error',
    'consistent-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-alert': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-lone-blocks': 'error',
    'no-var': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    yoda: 'error',
    'brace-style': 'error',
    camelcase: 'error',
    'eol-last': ['error', 'always'],
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-trailing-spaces': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false, "varsIgnorePattern": "^_" }]

  },
};
