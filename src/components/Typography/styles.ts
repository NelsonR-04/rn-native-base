import { StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors.json';

export type Gradients = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type Colors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'gray'
  | 'black'
  | 'white';

export const setTextColor = (color: Colors, gradient: Gradients): any => {
  const colorKey = colors[color];

  return StyleSheet.create<any>({
    color: colorKey[gradient] ?? colorKey,
  });
};

export default StyleSheet.create({
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
