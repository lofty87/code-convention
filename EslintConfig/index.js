module.exports = {
  extends: [
    './base',
    './rules/core',
    './rules/import',
    './rules/typescript',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
};
