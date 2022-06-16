import { StyleSheet } from 'react-native';
import sharedStyle from '@Components/Typography/styles';

export default StyleSheet.create({
  ...sharedStyle,
  large: {
    fontSize: 18,
    lineHeight: 24,
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
  },
  small: {
    fontSize: 14,
    lineHeight: 20,
  },
});
