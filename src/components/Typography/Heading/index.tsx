import React, { FC, ReactNode } from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors, Gradients, setTextColor } from '@Components/Typography/styles';
import styles from './styles';

const Heading: FC<HeadingProps> = ({
  size = 'medium',
  bold = false,
  textAlingment = 'left',
  underline = false,
  color,
  gradient = 100,
  testID,
  children,
}) => {
  const { colors } = useTheme();

  const weight = bold ? 'bold' : 'regular';

  const textColor = (color && gradient && setTextColor(color, gradient)) || {
    color: colors.text,
  };

  const wrapperStyle = {
    ...textColor,
    ...(underline && styles.underline),
    ...styles[size],
    ...styles[weight],
    ...styles[textAlingment],
    ...styles.fontFamily,
  };

  return (
    <Text testID={testID} style={wrapperStyle}>
      {children}
    </Text>
  );
};

export interface HeadingProps {
  bold?: boolean;
  size?: 'large' | 'medium' | 'small';
  color?: Colors;
  gradient?: Gradients;
  textAlingment?: 'left' | 'center' | 'right';
  underline?: boolean;
  testID?: string;
  children: ReactNode;
}

export default Heading;
