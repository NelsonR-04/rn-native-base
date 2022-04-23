import React from 'react';
import Flexbox from '@Components/Layout/Flexbox';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

describe('Test Layout <Flexbox /> component', () => {
  const props = {
    children: [<View />, <View />, <View />],
  };
  it('should render <Flexbox /> with default props', () => {
    render(<Flexbox {...props} />);
  });
});
