import React from 'react';
import { useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import StackNavigator from '@Navigator/index';
import 'react-native-gesture-handler';
import './i18n.config';

const App = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      {/* <StatusBar barStyle={isDarkMode} /> */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
