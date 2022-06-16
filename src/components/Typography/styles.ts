import { StyleSheet } from 'react-native';
import {
  black,
  blue,
  gray,
  green,
  purple,
  red,
  white,
} from '@walmart/gtp-shared-components/dist/theme/colors.json';

const colorStyles = {
  white: {
    color: white,
  },
  black: {
    color: black,
  },
  blue100: {
    color: blue[100],
  },
  gray160: {
    color: gray[160],
  },
  gray140: {
    color: gray[140],
  },
  gray130: {
    color: gray[130],
  },
  gray110: {
    color: gray[110],
  },
  gray100: {
    color: gray[100],
  },
  gray50: {
    color: gray[50],
  },
  gray30: {
    color: gray[30],
  },
  green100: {
    color: green[100],
  },
  red100: {
    color: red[100],
  },
  purple90: {
    color: purple[90],
  },
};

export default StyleSheet.create({
  ...colorStyles,
  fontFamily: {
    fontFamily: 'Bogle',
  },
  regular: {
    fontWeight: '400',
  },
  bold: {
    fontWeight: '700',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
