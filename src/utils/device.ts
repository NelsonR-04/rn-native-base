import { NativeModules, Platform } from 'react-native';

export const getDeviceLanguage = () => {
  const language =
    Platform.OS === 'android'
      ? NativeModules.I18nManager.localeIdentifier
      : NativeModules.SettingsManager.settings.AppleLocale;

  return language.substring(0, 2);
};
