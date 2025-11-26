import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Divider } from './Divider';
import { Placeholder } from '../_localComponents/Placeholder';
import { Stack } from '../Stack';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Base: Story = {
  args: {},
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={10}>
        <Placeholder height={300} color="orange100" />
        <Divider {...args} />
        <Placeholder height={300} color="blue100" />
      </Stack>
    );
  },
};

export const Inverse: Story = {
  ...Base,
  args: {
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const WithColorOrange: Story = {
  ...Base,
  args: {
    color: 'orange100',
  },
};

export const WithColorBlue: Story = {
  ...Base,
  args: {
    color: 'blue100',
  },
};

export const WithColorGreen: Story = {
  ...Base,
  args: {
    color: 'green100',
  },
};

export const WithColorCyan: Story = {
  ...Base,
  args: {
    color: 'cyan50',
  },
};

export const WithColorPurple: Story = {
  ...Base,
  args: {
    color: 'purple100',
  },
};

export const WithColorYellow: Story = {
  ...Base,
  args: {
    color: 'yellow100',
  },
};

export const WithMarginTop: Story = {
  ...Base,
  args: {
    marginTop: 20,
  },
};

export const WithMarginBottom: Story = {
  ...Base,
  args: {
    marginBottom: 20,
  },
};

export const WithMarginX: Story = {
  ...Base,
  args: {
    marginX: 5,
  },
};

export const WithMarginY: Story = {
  ...Base,
  args: {
    marginY: 5,
  },
};

export const WithPaddingTop: Story = {
  ...Base,
  args: {
    paddingTop: 10,
  },
};

export const WithPaddingBottom: Story = {
  ...Base,
  args: {
    paddingBottom: 10,
  },
};

export const ColoredWithInverse: Story = {
  ...Base,
  args: {
    color: 'blue100',
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const WithMaxWidth: Story = {
  ...Base,
  args: {
    // maxWidth: 500, // property does not exist on Divider but on BlockWithOptions
  },
  render(args) {
    return (
      <Stack direction="column" align="center">
        <Placeholder height={300} width={800} color="blackTr10" />
        <Divider {...args} />
        <Placeholder height={300} width={800} color="yellow600" />
      </Stack>
    );
  },
};

export const WithFullWidth: Story = {
  ...Base,
  args: {
    //width: '100%', // This does not work as expected
  },
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={10}>
        <Placeholder height={300} width={800} color="yellow400" />
        <Divider {...args} />
        <Placeholder height={300} width={800} color="blue100" />
      </Stack>
    );
  },
};

export const WithCenteredLayout: Story = {
  ...Base,
  args: {
    /*  marginX: 'auto', */
    /*  maxWidth: 600, */
  },
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={24} align="center">
        <Placeholder height={300} width={600} color="orange100" />
        <Divider {...args} />
        <Placeholder height={300} width={600} color="blue100" />
      </Stack>
    );
  },
};

export const MultipleDividers: Story = {
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={5}>
        <Placeholder height={150} color="orange100" />
        <Divider {...args} />
        <Placeholder height={150} color="blue100" />
        <Divider {...args} color="blue100" />
        <Placeholder height={150} color="green100" />
        <Divider {...args} color="green100" />
        <Placeholder height={150} color="green600" />
      </Stack>
    );
  },
};

export const ThinContent: Story = {
  args: {},
  render: (args) => {
    return (
      <Stack direction="column" marginY={10} marginX={10} gap={10}>
        <Placeholder height={50} color="orange100" />
        <Divider {...args} />
        <Placeholder height={50} color="blue100" />
      </Stack>
    );
  },
};
