import React, { Children, FC, ReactNode, RefObject } from 'react';
import { LayoutChangeEvent, View, ViewStyle } from 'react-native';
import styles from './styles';

const Flexbox: FC<FlexboxProps> = ({
  flexDirection = 'row',
  justifyContent = 'center',
  textAlign = 'center',
  alignItems,
  gap,
  marginTop,
  marginBottom,
  marginHorizontal,
  marginVertical,
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
    ...(marginTop && styles[`marginTop${marginTop}`]),
    ...(marginBottom && styles[`marginBottom${marginBottom}`]),
    ...(marginHorizontal && styles[`marginHorizontal${marginHorizontal}`]),
    ...(marginVertical && styles[`marginVertical${marginVertical}`]),
    ...(paddingHorizontal && styles[`paddingHorizontal${paddingHorizontal}`]),
    ...(paddingVertical && styles[`paddingVertical${paddingVertical}`]),
    ...styles[flexDirection],
    ...styles[justifyContent],
    ...styles.wrapper,
    ...style,
  };

  const childStyle = {
    ...(flexDirection !== 'column' && styles[`rowGap${gap}`]),
    ...(flexDirection !== 'row' && styles[`columnGap${gap}`]),
  };

  return (
    <View style={componentStyle} ref={ref} testID={testID}>
      {Children.map(children, (child, index) => {
        return <View style={index !== 0 && childStyle}>{child}</View>;
      })}
    </View>
  );
};

type Gap = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48;

interface FlexboxProps {
  children: ReactNode;
  style?: ViewStyle;
  ref?: RefObject<View>;
  gap?: Gap;
  marginTop?: Gap;
  marginBottom?: Gap;
  marginHorizontal?: Gap;
  marginVertical?: Gap;
  paddingHorizontal?: Gap;
  paddingVertical?: Gap;
  flexDirection?: 'row' | 'column';
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

export default Flexbox;
