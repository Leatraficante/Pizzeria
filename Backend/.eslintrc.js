module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    quotes: ['error', 'single'],
    'init-declarations': 'error',
  },
};
