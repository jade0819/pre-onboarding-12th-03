module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    eqeqeq: 'error',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
  },
};
