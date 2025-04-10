module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/named': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-empty-named-blocks': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-useless-path-segments': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [ 'error', {
      groups: [
        'builtin',
        [ 'external', 'internal' ],
        'parent',
        [ 'index', 'sibling' ],
        'object',
        'type',
      ],
      pathGroups: [
        { pattern: 'next', group: 'external', position: 'before' },
        { pattern: 'next/**/*', group: 'external', position: 'before' },
        { pattern: 'next*', group: 'external', position: 'before' },
        { pattern: 'expo', group: 'external', position: 'before' },
        { pattern: 'expo/**/*', group: 'external', position: 'before' },
        { pattern: 'expo*', group: 'external', position: 'before' },
        { pattern: 'react', group: 'external', position: 'before' },
        { pattern: 'react/**/*', group: 'external', position: 'before' },
        { pattern: 'react-dom', group: 'external', position: 'before' },
        { pattern: 'react-native', group: 'external', position: 'before' },
        { pattern: 'react*', group: 'external', position: 'before' },
        { pattern: '@react*', group: 'external', position: 'before' },
        { pattern: '@/**/*', group: 'external', position: 'after' },
        { pattern: '{@components,@components/**/*}', group: 'external', position: 'after' },
        { pattern: '{@screens,@screens/**/*}', group: 'external', position: 'after' },
        { pattern: '{@contexts,@contexts/**/*}', group: 'external', position: 'after' },
        { pattern: '{@constants,@constants/**/*}', group: 'external', position: 'after' },
        { pattern: '{@locales,@locales/**/*}', group: 'external', position: 'after' },
        { pattern: '{@lib,@lib/**/*}', group: 'external', position: 'after' },
        { pattern: '{@storage,@storage/**/*}', group: 'external', position: 'after' },
        { pattern: '{@stores,@stores/**/*}', group: 'external', position: 'after' },
        { pattern: '{@api,@api/**/*}', group: 'external', position: 'after' },
        { pattern: '{@analytics,@analytics/**/*}', group: 'external', position: 'after' },
        { pattern: '{src,src/**/*}', group: 'external', position: 'after' },
      ],
      pathGroupsExcludedImportTypes: [],
      alphabetize: { order: 'asc', caseInsensitive: false },
      warnOnUnassignedImports: false,
      distinctGroup: false,
      'newlines-between': 'always',
    } ],
  },
};
