module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'eslintno-console': ['off'],
    'eslintno-unused-vars': ['off'],
    'no-unused-vars': ['off'],
    'no-plusplus': ['off'],
    'no-var': ['off'],
    'func-names': ['off'],
  },
};
