const path = require('path');

module.exports = {
  env: {
    jest: true
  },
  plugins: [
    'security'
  ],
  extends: [
    'airbnb-base',
    'plugin:security/recommended'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', {
      arrays: 'never'
    }],
    'function-paren-newline': 'off',
    strict: 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@app', path.resolve(__dirname, './src/app.js')],
          ['@api', path.resolve(__dirname, './src/api')],
          ['@utils', path.resolve(__dirname, './src/utils')],
          ['@database', path.resolve(__dirname, './src/database')],
          ['@helpers', path.resolve(__dirname, './src/helpers')],
          ['@config', path.resolve(__dirname, './src/config')]
        ],
        extensions: ['.js']
      }
    }
  }
};
