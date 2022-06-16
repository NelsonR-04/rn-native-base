import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Column, Row } from '@Components/Layout';

export default {
  component: Row,
} as ComponentMeta<typeof Row>;

const styles = StyleSheet.create({
  wrapper: { backgroundColor: 'white', padding: 24, borderRadius: 4 },
  item: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 4,
    width: 'fit-content',
  },
});

const TemplateRowLayout: ComponentStory<typeof Row> = () => (
  <Column gap={24}>
    <Column gap={24} style={styles.wrapper}>
      <Text> justifyContent="center" (Default)</Text>
      <Row gap={8}>
        <Text style={styles.item}>Item #01</Text>
        {/* <Text style={styles.item}>Item #02</Text> */}
        <Text style={styles.item}>Item #03</Text>
      </Row>
    </Column>
    <Column gap={24} style={styles.wrapper}>
      <Text> justifyContent="flex-start"</Text>
      <Row justifyContent="flex-start" gap={8}>
        <Text style={styles.item}>flex-start</Text>
        <Text style={styles.item}>flex-start</Text>
        <Text style={styles.item}>flex-start</Text>
      </Row>
    </Column>
    <Column gap={24} style={styles.wrapper}>
      <Text> justifyContent="flex-end"</Text>
      <Row justifyContent="flex-end" gap={8}>
        <Text style={styles.item}>flex-end</Text>
        <Text style={styles.item}>flex-end</Text>
        <Text style={styles.item}>flex-end</Text>
      </Row>
    </Column>
    <Column gap={24} style={styles.wrapper}>
      <Text> justifyContent="space-between"</Text>
      <Row justifyContent="space-between" gap={8}>
        <Text style={styles.item}>space-between</Text>
        <Text style={styles.item}>space-between</Text>
        <Text style={styles.item}>space-between</Text>
      </Row>
    </Column>
    <Column gap={24} style={styles.wrapper}>
      <Text> justifyContent="space-around"</Text>
      <Row justifyContent="space-around" gap={8}>
        <Text style={styles.item}>space-around</Text>
        <Text style={styles.item}>space-around</Text>
        <Text style={styles.item}>space-around</Text>
      </Row>
    </Column>
    <Column gap={24} style={styles.wrapper}>
      <Text> justifyContent="space-evenly"</Text>
      <Row justifyContent="space-evenly" gap={8}>
        <Text style={styles.item}>space-evenly</Text>
        <Text style={styles.item}>space-evenly</Text>
        <Text style={styles.item}>space-evenly</Text>
      </Row>
    </Column>
  </Column>
);

const TemplateColumnLayout: ComponentStory<typeof Column> = () => (
  <>
    <Column gap={24}>
      <Column gap={24} style={styles.wrapper}>
        <Text>flexDirection="column" alignItems="stretch" (Default)</Text>
        <Column gap={8}>
          <Text style={styles.item}>Item #01</Text>
          {null}
          {/* <Text style={styles.item}>Item #02</Text> */}
          <Text style={styles.item}>Item #03</Text>
        </Column>
      </Column>
      <Column gap={24} style={styles.wrapper}>
        <Text>flexDirection="column" alignItems="flex-start"</Text>
        <Column alignItems="flex-start" gap={8}>
          <Text style={styles.item}>flex-start</Text>
          <Text style={styles.item}>flex-start</Text>
          <Text style={styles.item}>flex-start</Text>
        </Column>
      </Column>
      <Column gap={24} style={styles.wrapper}>
        <Text>flexDirection="column" alignItems="flex-end"</Text>
        <Column alignItems="flex-end" gap={8}>
          <Text style={styles.item}>flex-end</Text>
          <Text style={styles.item}>flex-end</Text>
          <Text style={styles.item}>flex-end</Text>
        </Column>
      </Column>
      <Column gap={24} style={styles.wrapper}>
        <Text>flexDirection="column" alignItems="center"</Text>
        <Column alignItems="center" gap={8}>
          <Text style={styles.item}>center</Text>
          <Text style={styles.item}>center</Text>
          <Text style={styles.item}>center</Text>
        </Column>
      </Column>
    </Column>
  </>
);

export const GeneralRowLayout = TemplateRowLayout.bind({});
export const GeneralColumnLayout = TemplateColumnLayout.bind({});
