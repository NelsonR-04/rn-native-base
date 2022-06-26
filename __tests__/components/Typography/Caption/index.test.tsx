import React from 'react';
import { render } from '@testing-library/react-native';
import { Caption } from '@Components/Typography';
import { CaptionProps } from '@Components/Typography/Caption';

describe('tests typography <Caption />', () => {
  const expectedtext = 'Typography Caption Test';

  it('should render text inside <Caption /> with default props', () => {
    const props: CaptionProps = {
      testID: 'typography-caption',
      children: expectedtext,
    };

    const { getByTestId, getByText } = render(<Caption {...props} />);
    const typographyCaption = getByTestId('typography-caption');

    expect(typographyCaption).toBeTruthy();
    expect(getByText(expectedtext)).toBeTruthy();
  });

  it('should render <Caption /> underlined', () => {
    const props: CaptionProps = {
      underline: true,
      testID: 'typography-caption',
      children: expectedtext,
    };

    const { getByTestId } = render(<Caption {...props} />);
    const typographyCaption = getByTestId('typography-caption');
    const styles = typographyCaption.props.style;

    expect(styles).toHaveProperty('textDecorationLine', 'underline');
  });

  it('should render <Caption /> bold', () => {
    const props: CaptionProps = {
      bold: true,
      testID: 'typography-caption',
      children: expectedtext,
    };

    const { getByTestId } = render(<Caption {...props} />);
    const typographyCaption = getByTestId('typography-caption');
    const styles = typographyCaption.props.style;

    expect(styles).toHaveProperty('fontWeight', '700');
  });

  it('should render <Caption /> with text color white', () => {
    const props: CaptionProps = {
      color: 'white',
      testID: 'typography-caption',
      children: expectedtext,
    };

    const { getByTestId } = render(<Caption {...props} />);
    const typographyCaption = getByTestId('typography-caption');
    const styles = typographyCaption.props.style;

    expect(styles).toHaveProperty('color', '#FFFFFF');
  });
});
