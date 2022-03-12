import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {},
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "I'm a Heading component",
};
