import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Row from '@Components/Layout/Row';
import { Body } from '..';

export default {
  title: 'Typography/Body',
  component: Body,
} as ComponentMeta<typeof Body>;

const TemplateBody: ComponentStory<typeof Body> = (args) => {
  return (
    <Row flexDirection="column" gap={40}>
      <Row flexDirection="column" gap={24}>
        <Body {...args} />
        <Row justifyContent="flex-start" gap={32}>
          <Row flexDirection="column">
            <Body>Name</Body>
            <Body>Body Large</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Font size</Body>
            <Body>18px</Body>
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
      <Row flexDirection="column" gap={24}>
        <Body size="medium">
          Lorem ipsum dolor sit amet, consectetur (Default)
        </Body>
        <Row justifyContent="flex-start" gap={32}>
          <Row flexDirection="column">
            <Body>Name</Body>
            <Body>Body Medium</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Font size</Body>
            <Body>16px</Body>
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
      <Row flexDirection="column" gap={24}>
        <Body size="small">Lorem ipsum dolor sit amet, consectetur</Body>
        <Row justifyContent="flex-start" gap={32}>
          <Row flexDirection="column">
            <Body>Name</Body>
            <Body>Body small</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Font size</Body>
            <Body>14px</Body>
          </Row>
          <Row flexDirection="column">
            <Body>Line height</Body>
            <Body>20px</Body>
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

export const BodyTypgraphy = TemplateBody.bind({});
BodyTypgraphy.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur',
  size: 'large',
  color: 'white',
};
