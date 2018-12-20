module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype'
  ],
  plugins: ['flowtype', 'flowtype-errors', 'jest'],

  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    indent: ['error', 2],
    'linebreak-style': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'flowtype-errors/show-errors': 'error'
  }
};
