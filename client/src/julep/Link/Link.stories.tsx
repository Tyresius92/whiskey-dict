import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Link, LinkProps } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {},
} as Meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  href: 'https://www.google.com',
};
