import React from 'react';
import { render } from '@testing-library/react-native';
import { Body } from '@Components/Typography';
import { BodyProps } from '@Components/Typography/Body';

describe('tests typography <Body />', () => {
  const expectedtext = 'Typography Body Test';

  it('should render text inside <Body /> with default props', () => {
    const props: BodyProps = {
      testID: 'typography-body',
      children: expectedtext,
    };

    const { getByTestId, getByText } = render(<Body {...props} />);
    const typographyBody = getByTestId('typography-body');

    expect(typographyBody).toBeTruthy();
    expect(getByText(expectedtext)).toBeTruthy();
  });

  it('should render <Body /> underlined', () => {
    const props: BodyProps = {
      underline: true,
      testID: 'typography-body',
      children: expectedtext,
    };

    const { getByTestId } = render(<Body {...props} />);
    const typographyBody = getByTestId('typography-body');
    const styles = typographyBody.props.style;

    expect(styles).toHaveProperty('textDecorationLine', 'underline');
  });

  it('should render <Body /> bold', () => {
    const props: BodyProps = {
      bold: true,
      testID: 'typography-body',
      children: expectedtext,
    };

    const { getByTestId } = render(<Body {...props} />);
    const typographyBody = getByTestId('typography-body');
    const styles = typographyBody.props.style;

    expect(styles).toHaveProperty('fontWeight', '700');
  });

  it('should render <Body /> with text color white', () => {
    const props: BodyProps = {
      color: 'white',
      testID: 'typography-body',
      children: expectedtext,
    };

    const { getByTestId } = render(<Body {...props} />);
    const typographyBody = getByTestId('typography-body');
    const styles = typographyBody.props.style;

    expect(styles).toHaveProperty('color', '#FFFFFF');
  });
});
