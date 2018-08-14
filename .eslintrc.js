module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', {
      semi: false,
      singleQuote: true,
      trailingComma: 'es5'
    }]
  }
}
