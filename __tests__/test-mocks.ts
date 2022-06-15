import i18n from '@Tests/test-i18n.config';

export const mockDeviceLanguage = (language: string) =>
  jest
    .spyOn(require('@Utils/device'), 'getDeviceLanguage')
    .mockImplementation(() => language);

export const mockPlatformOS = (OS: string) =>
  jest.mock('react-native/Libraries/Utilities/Platform', () => ({
    OS,
    select: jest.fn(),
  }));

export const mockNativeModulesLocale = (mockLocale: string) => {
  jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => {
    return {
      I18nManager: {
        localeIdentifier: mockLocale,
      },
      SettingsManager: {
        settings: {
          AppleLocale: mockLocale,
        },
      },
    };
  });
};

export const mockNavigation = (mockNavigate = jest.fn()) =>
  jest.mock('@react-navigation/native', () => {
    return {
      useNavigation: () => ({
        navigate: mockNavigate,
      }),
    };
  });

export const mockUseTranslation = () =>
  jest.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        i18n,
      };
    },
  }));

export const mockUseDispatch = (mockDispatcher = jest.fn()) =>
  jest.mock('react-redux', () => {
    return { useDispatch: mockDispatcher };
  });

export const mockNativeDriver = () =>
  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockNativeEventEmitter = () =>
  jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

export const mockUseAuthentication = (mockAuthentication: any) => {
  const { login, logout, getUserSession, setupSSO } = mockAuthentication;
  return jest
    .spyOn(require('@Utils/authentication'), 'default')
    .mockImplementation(() => {
      return {
        login,
        logout,
        getUserSession,
        setupSSO,
      };
    });
};
