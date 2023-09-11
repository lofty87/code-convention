module.exports = {
  extends: [
    './eslint/base',
    './eslint/rules/core',
    './eslint/rules/import',
    './eslint/rules/typescript',
    './eslint/rules/jsx-a11y',
    './eslint/rules/react',
  ].map(require.resolve),
}
