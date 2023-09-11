module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
};
