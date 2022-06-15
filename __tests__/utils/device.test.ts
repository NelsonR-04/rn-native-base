import { mockNativeModulesLocale, mockPlatformOS } from '@Tests/test-mocks';
import { getDeviceLanguage } from '@Utils/device';

describe('Test device utils', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('should get device language from Android', () => {
    const language = 'es';

    mockPlatformOS('android');
    mockNativeModulesLocale('es_CL');

    expect(getDeviceLanguage()).toBe(language);
  });

  it('should get device language from iOS', () => {
    const language = 'es';

    mockPlatformOS('ios');
    mockNativeModulesLocale('es_CL');

    expect(getDeviceLanguage()).toBe(language);
  });
});
