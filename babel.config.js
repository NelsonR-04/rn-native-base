module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js', '.json'],
        alias: {
          '@Assets/': './src/assets',
          '@Components': './src/components',
          '@I18n': './src/i18n',
          '@Navigator': './src/navigator',
          '@Storybook': './storybook',
          '@Tests': './__tests__',
          '@Utils': './src/utils',
          '@Views': './src/views',
        },
      },
    ],
  ],
};
