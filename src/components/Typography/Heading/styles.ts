import { StyleSheet } from 'react-native';
import sharedStyle from '@Components/Typography/styles';

export default StyleSheet.create({
  ...sharedStyle,
  large: {
    fontSize: 32,
    lineHeight: 40,
  },
  medium: {
    fontSize: 24,
    lineHeight: 36,
  },
  small: {
    fontSize: 20,
    lineHeight: 24,
  },
});
