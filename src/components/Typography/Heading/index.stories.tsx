import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Row from '@Components/Layout/Row';
import { Body, Heading } from '..';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const TemplateHeading: ComponentStory<typeof Heading> = args => {
  return (
    <Row flexDirection="column" gap={40}>
      <Row flexDirection="column" gap={24}>
        <Heading {...args} />
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
      <Row flexDirection="column" gap={24}>
        <Heading size="medium">
          Lorem ipsum dolor sit amet, consectetur (Default)
        </Heading>
        <Row justifyContent="flex-start" gap={32}>
          <Row flexDirection="column">
            <Body>Name</Body>
            <Body>Heading Medium</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Font size</Body>
            <Body>24px</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Line height</Body>
            <Body>36px</Body>
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
      <Row flexDirection="column" gap={24}>
        <Heading size="small">Lorem ipsum dolor sit amet, consectetur</Heading>
        <Row justifyContent="flex-start" gap={32}>
          <Row flexDirection="column">
            <Body>Name</Body>
            <Body>Heading Small</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Font size</Body>
            <Body>20px</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Line height</Body>
            <Body>24px</Body>
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
  children: 'Lorem ipsum dolor sit amet, consectetur',
  size: 'large',
  color: 'white',
};
