import React, { FC, ReactNode } from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Body: FC<BodyProps> = ({
  bold = false,
  textAlingment = 'left',
  size = 'medium',
  underline = false,
  color = 'black',
  testID,
  children,
}) => {
  const weight = bold ? 'bold' : 'regular';
  const wrapperStyle = {
    ...(color && styles[color]),
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

export interface BodyProps {
  bold?: boolean;
  size?: 'large' | 'medium' | 'small';
  color?:
    | 'white'
    | 'black'
    | 'gray160'
    | 'gray140'
    | 'gray130'
    | 'gray110'
    | 'gray100'
    | 'gray50'
    | 'gray30'
    | 'red100'
    | 'green100'
    | 'purple90'
    | 'blue100';
  textAlingment?: 'left' | 'center' | 'right';
  underline?: boolean;
  testID?: string;
  children: ReactNode;
}

export default Body;
