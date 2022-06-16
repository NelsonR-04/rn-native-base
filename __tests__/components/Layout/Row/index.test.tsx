import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import Row, { RowProps } from '@Components/Layout/Row';

describe('Test render styles layout <Row />', () => {
  it('must render <Row /> with default props', () => {
    const props: RowProps = {
      testID: 'row-id',
      children: <View testID="row-children" />,
    };
    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');

    const { style } = componentRow.props;
    expect(style).toHaveProperty('flexDirection', 'row');

    expect(componentRow).toBeTruthy();
    expect(getByTestId('row-children')).toBeTruthy();
  });

  it('must render < Row /> with flexDirection prop', () => {
    const props: RowProps = {
      testID: 'row-id',
      children: <View />,
    };
    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('flexDirection', 'row');
  });

  it('must render <Row /> with justifyContent prop', () => {
    const props: RowProps = {
      testID: 'row-id',
      justifyContent: 'center',
      children: <View />,
    };

    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('justifyContent', props.justifyContent);
  });

  it('must render <Row /> with textAlign prop', () => {
    const props: RowProps = {
      testID: 'row-id',
      textAlign: 'center',
      children: <View />,
    };

    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('textAlign', props.textAlign);
  });

  it('must render <Row /> with alignItem prop', () => {
    const props: RowProps = {
      alignItems: 'flex-start',
      testID: 'row-id',
      children: <View />,
    };

    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('alignItems', props.alignItems);
  });

  it('must render <Row /> with paddingHorizontal prop', () => {
    const props: RowProps = {
      paddingHorizontal: 4,
      testID: 'row-id',
      children: <View />,
    };

    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('paddingHorizontal', props.paddingHorizontal);
  });

  it('must render <Row /> with paddingVertical prop', () => {
    const props: RowProps = {
      paddingVertical: 4,
      testID: 'row-id',
      children: <View />,
    };

    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('row-id');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('paddingVertical', props.paddingVertical);
  });

  it('must render <Row /> with gap prop', () => {
    const props: RowProps = {
      gap: 4,
      testID: 'row-id',
      children: [<View />, <View />],
    };

    const { getByTestId } = render(<Row {...props} />);
    const componentRow = getByTestId('children-1');
    const { style } = componentRow.props;

    expect(style).toHaveProperty('marginStart', props.gap);
  });
});
