import React, { FC, ReactNode } from 'react';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

const Heading: FC<HeadingProps> = ({
  size = 'medium',
  bold = false,
  textAlingment = 'left',
  underline = false,
  color,
  testID,
  children,
}) => {
  const { colors } = useTheme();

  const weight = bold ? 'bold' : 'regular';
  const wrapperStyle = {
    ...(color ? styles[color] : { color: colors.text }),
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
  color?: 'white' | 'black' | 'gray160' | 'gray130' | 'gray100' | 'gray50';
  textAlingment?: 'left' | 'center' | 'right';
  underline?: boolean;
  testID?: string;
  children: ReactNode;
}

export default Heading;
