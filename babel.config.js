module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Assets': './src/assets',
          '@Components': './src/components',
          '@I18n': './src/i18n',
          '@Mocks': './__tests__/__mocks__',
          '@Navigator': './src/navigator',
          '@Tests': './__tests__',
          '@Utils': './src/utils',
          '@Views': './src/views',
        },
      },
    ],
  ],
};
