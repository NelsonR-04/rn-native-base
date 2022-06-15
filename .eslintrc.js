module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: ['coverage'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [
                // Packages related to React and external packages at first.
                '^react',
                '^\\w',
                '^@?\\w',
                // Internal packages.
                '^(@Components)(/.*|$)',
                '^(@[A-Z]\\w*)(/.*|$)',
                // Side effect imports.
                '^\\u0000',
                // Parent imports.
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                // Relative imports.
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
              ],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',
      },
    },
  ],
};
