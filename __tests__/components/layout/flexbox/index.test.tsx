import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import Flexbox from '@Components/Layout/Flexbox';

describe('Test Layout <Flexbox /> component', () => {
  const props = {
    children: [<View />, <View />, <View />],
  };
  it('should render <Flexbox /> with default props', () => {
    render(<Flexbox {...props} />);
  });
});
