import React, { Children, FC, ReactNode, RefObject } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import styles from './styles';

const Column: FC<ColumnProps> = ({
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

  const childStyle = styles[`columnGap${gap}`];

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

export interface ColumnProps {
  children: ReactNode;
  style?: ViewStyle;
  ref?: RefObject<View>;
  paddingHorizontal?: Gap;
  paddingVertical?: Gap;
  gap?: Gap;
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

export default Column;
