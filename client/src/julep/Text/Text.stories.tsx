import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is default text',
};

export const Italic = Template.bind({});
Italic.args = {
  italic: true,
  children: 'This is italic text',
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  children: 'This is bold text',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  children: 'This is danger text',
};

export const AdditionalStyling = Template.bind({});
AdditionalStyling.args = {
  children: (
    <>
      To apply italics to some portion of the text{' '}
      <Text italic>
        wrap that portion in a Text component with the "italic" prop set to
        true.
      </Text>{' '}
      If you want to make it bold,{' '}
      <Text bold>
        wrap that portion in a Text component with the "bold" prop set to true.
      </Text>{' '}
      Underlined text should be avoided, as that usually signifies a link on the
      web.{' '}
      <Text color="danger">
        You can add color to Text with the "color" prop.
      </Text>{' '}
      <Text bold italic color="danger">
        You can also combine any or all of these as needed.
      </Text>
    </>
  ),
};
