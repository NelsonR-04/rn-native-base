import React, { Children, FC, ReactNode, RefObject } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import styles from './styles';

const Row: FC<RowProps> = ({
  justifyContent = 'center',
  textAlign = 'center',
  alignItems,
  gap,
  paddingHorizontal,
  paddingVertical,
  children,
  ref,
  testID,
  style,
}) => {
  const componentStyle = {
    ...(textAlign && styles[`textAlign${textAlign}`]),
    ...(alignItems && styles[`alignItems${alignItems}`]),
    ...(paddingHorizontal && styles[`paddingHorizontal${paddingHorizontal}`]),
    ...(paddingVertical && styles[`paddingVertical${paddingVertical}`]),
    ...styles[justifyContent],
    ...styles.wrapper,
    ...style,
  };

  const childStyle = styles[`rowGap${gap}`];

  const filteredChildren = Children.toArray(children).filter(Boolean);

  return (
    <View style={componentStyle} ref={ref} testID={testID}>
      {filteredChildren.map((child, index) => {
        return (
          <View
            testID={`children-${index}`}
            key={`children-${index}`}
            style={index !== 0 && childStyle}>
            {child}
          </View>
        );
      })}
    </View>
  );
};

type Gap = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48;

export interface RowProps {
  children: ReactNode;
  style?: ViewStyle;
  ref?: RefObject<View>;
  gap?: Gap;
  paddingHorizontal?: Gap;
  paddingVertical?: Gap;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  testID?: string;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}

export default Row;
