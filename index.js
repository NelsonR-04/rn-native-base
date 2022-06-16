import { AppRegistry } from 'react-native';
import App from './App';
import Storybook from './storybook/index';
import { name as appName } from './app.json';

console.log(process.env);
AppRegistry.registerComponent(appName, () =>
  process.env.REACT_APP_LOAD_STORYBOOK ? Storybook : App,
);
