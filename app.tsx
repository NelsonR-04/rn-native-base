import React, { FC } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@Navigator/index';
import './i18n.config';

const App: FC = () => {
  const isDarkMode =
    useColorScheme() === 'dark' ? 'dark-content' : 'light-content';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode} />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
