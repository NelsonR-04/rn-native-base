/**
 * @format
 */

import Storybook from '@Storybook/';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () =>
  process.env.REACT_APP_LOAD_STORYBOOK ? Storybook : App,
);
