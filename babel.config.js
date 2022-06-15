module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Components': './src/components',
          '@I18n': './src/i18n',
          '@Navigator': './src/navigator',
          '@Tests': './__tests__',
          '@Utils': './src/utils',
        },
      },
    ],
  ],
};
