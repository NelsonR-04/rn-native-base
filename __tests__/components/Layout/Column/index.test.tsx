import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import Column, { ColumnProps } from '@Components/Layout/Column';

describe('Test render styles layout <Column />', () => {
  it('must render <Column /> with default props', () => {
    const props: ColumnProps = {
      testID: 'column-id',
      children: <View testID="column-children" />,
    };
    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('column-id');

    console.log(componentRow.props);
    const { style } = componentRow.props;
    expect(style).toHaveProperty('flexDirection', 'column');

    expect(componentRow).toBeTruthy();
    expect(getByTestId('column-children')).toBeTruthy();
  });

  it('must render < Column /> with justifyContent prop', () => {
    const props: ColumnProps = {
      testID: 'column-id',
      justifyContent: 'center',
      children: <View />,
    };

    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('column-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('justifyContent', props.justifyContent);
  });

  it('must render < Column /> with textAlign prop', () => {
    const props: ColumnProps = {
      testID: 'column-id',
      textAlign: 'center',
      children: <View />,
    };

    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('column-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('textAlign', props.textAlign);
  });

  it('must render < Column /> with alignItem prop', () => {
    const props: ColumnProps = {
      alignItems: 'flex-start',
      testID: 'column-id',
      children: <View />,
    };

    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('column-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('alignItems', props.alignItems);
  });

  it('must render < Column /> with paddingHorizontal prop', () => {
    const props: ColumnProps = {
      paddingHorizontal: 4,
      testID: 'column-id',
      children: <View />,
    };

    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('column-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('paddingHorizontal', props.paddingHorizontal);
  });

  it('must render < Column /> with paddingVertical prop', () => {
    const props: ColumnProps = {
      paddingVertical: 4,
      testID: 'column-id',
      children: <View />,
    };

    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('column-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('paddingVertical', props.paddingVertical);
  });

  it('must render < Column /> with gap prop', () => {
    const props: ColumnProps = {
      gap: 4,
      testID: 'column-id',
      children: [<View />, <View />],
    };

    const { getByTestId } = render(<Column {...props} />);
    const componentRow = getByTestId('children-1');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('marginTop', props.gap);
  });
});
