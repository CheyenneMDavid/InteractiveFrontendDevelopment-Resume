module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {},
  // extends: ['plugin:prettier/recommended'],
  // parserOptions: {
  //   ecmaVersion: 2021,
  //   sourceType: 'module',
  // },
  // plugins: ['prettier'],
  // rules: {
  //   'prettier/prettier': 'error',
  // },
};
