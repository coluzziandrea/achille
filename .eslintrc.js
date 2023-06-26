module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:jest/recommended'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: ['react', 'react-native'],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],

  settings: {
    react: {
      version: 'detect'
    }
  }
}
