import React from 'react';
import { render } from '@testing-library/react-native';
import { Heading } from '@Components/Typography';
import { HeadingProps } from '@Components/Typography/Heading';

describe('tests typography <Heading />', () => {
  const expectedtext = 'Typography Heading Test';

  it('should render text inside <Heading />', () => {
    const props: HeadingProps = {
      testID: 'typography-heading',
      children: expectedtext,
    };

    const { getByTestId, getByText } = render(<Heading {...props} />);
    const typographyHeading = getByTestId('typography-heading');

    const styles = typographyHeading.props.style;
    expect(styles).toHaveProperty('color', '#000000');

    expect(typographyHeading).toBeTruthy();
    expect(getByText(expectedtext)).toBeTruthy();
  });

  it('should render <Heading /> underlined', () => {
    const props: HeadingProps = {
      underline: true,
      testID: 'typography-heading',
      children: expectedtext,
    };

    const { getByTestId } = render(<Heading {...props} />);
    const typographyHeading = getByTestId('typography-heading');
    const styles = typographyHeading.props.style;

    expect(styles).toHaveProperty('textDecorationLine', 'underline');
  });

  it('should render <Heading /> bold', () => {
    const props: HeadingProps = {
      bold: true,
      testID: 'typography-heading',
      children: expectedtext,
    };

    const { getByTestId } = render(<Heading {...props} />);
    const typographyHeading = getByTestId('typography-heading');
    const styles = typographyHeading.props.style;

    expect(styles).toHaveProperty('fontWeight', '700');
  });

  it('should render <Heading /> with text color white', () => {
    const props: HeadingProps = {
      color: 'white',
      testID: 'typography-heading',
      children: expectedtext,
    };

    const { getByTestId } = render(<Heading {...props} />);
    const typographyHeading = getByTestId('typography-heading');
    const styles = typographyHeading.props.style;

    expect(styles).toHaveProperty('color', '#FFFFFF');
  });
});
