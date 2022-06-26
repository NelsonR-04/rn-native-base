import { StyleSheet } from 'react-native';
import { black, gray, white } from '../../assets/styles/colors.json';

const colorStyles = {
  white: {
    color: white,
  },
  black: {
    color: black,
  },
  gray30: {
    color: gray[30],
  },
  gray50: {
    color: gray[50],
  },
  gray100: {
    color: gray[100],
  },
  gray110: {
    color: gray[110],
  },
  gray130: {
    color: gray[130],
  },
  gray140: {
    color: gray[140],
  },
  gray160: {
    color: gray[160],
  },
};

export default StyleSheet.create({
  ...colorStyles,
  fontFamily: {
    fontFamily: 'Lato',
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
