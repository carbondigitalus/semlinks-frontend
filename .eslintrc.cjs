module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['*.js'], // Your JavaScript files extension
      extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  root: true,
};