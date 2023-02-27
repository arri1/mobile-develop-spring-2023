module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['prettier', 'prefer-arrow'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'prefer-const': 'error',
    'prefer-arrow/prefer-arrow-functions': 'error',
    'react-hooks/exhaustive-deps': 'off',
    radix: 'off',
  },
};
