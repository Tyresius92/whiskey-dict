import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Divider, DividerProps } from './Divider';
import { Text } from '../Text/Text';
import { Flex } from '../Flex/Flex';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {},
} as Meta;

const Template: Story<DividerProps> = () => (
  <Flex flexDirection="column">
    <Flex>
      <Text>Some Text</Text>
      <Divider orientation="vertical" />
      <Text>Some Text</Text>
      <Divider orientation="vertical" />
      <Text>Some Text</Text>
    </Flex>
    <Divider />
    <Text>More text</Text>
  </Flex>
);

export const Primary = Template.bind({});
Primary.args = {
};
