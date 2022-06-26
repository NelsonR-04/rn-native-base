import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Row from '@Components/Layout/Row';
import { Body, Caption } from '..';

export default {
  title: 'Typography/Caption',
  component: Caption,
} as ComponentMeta<typeof Caption>;

const TemplateHeading: ComponentStory<typeof Caption> = (args) => {
  return (
    <Row flexDirection="column" gap={40}>
      <Row flexDirection="column" gap={24}>
        <Caption {...args} />
        <Row justifyContent="flex-start" gap={32}>
          <Row flexDirection="column">
            <Body>Name</Body>
            <Body>Heading Large</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Font size</Body>
            <Body>32px</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Line height</Body>
            <Body>40px</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Default font weight</Body>
            <Body>400</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Alternate font weight</Body>
            <Body>700</Body>
          </Row>
        </Row>
      </Row>
    </Row>
  );
};

export const HeadingTypography = TemplateHeading.bind({});
HeadingTypography.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur (Default)',
  color: 'white',
};
