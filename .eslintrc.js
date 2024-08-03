module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable specific rules
    'no-unused-vars': 'off',
    '@next/next/no-img-element': 'off',

    // Or customize the rules
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
  },
};
