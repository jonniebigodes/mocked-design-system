import { Meta, StoryObj } from '@storybook/react-vite';
import React, { FC } from 'react';
import { Text } from '../Text';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const accordions = [
  {
    id: 0,
    triggerCopy: 'Does Chromatic replace Jest or Enzyme?',
    icon: 'cloudhollow',
  },
  {
    id: 1,
    triggerCopy: 'Can I get rid of my BrowserStack or Sauce subscription?',
    icon: 'facehappy',
  },
  {
    id: 2,
    triggerCopy: 'How is this compared to Selenium, Cypress, or Playwright?',
    icon: 'accessibilityalt',
  },
  {
    id: 3,
    triggerCopy: 'Why run visual tests in the cloud?',
    icon: 'heart',
  },
];

const ExamplePanelContent: FC<{ inverse: boolean | undefined }> = ({
  inverse,
}) => {
  const color = inverse ? 'white' : 'slate800';

  return (
    <Text color={color}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, autem
      expedita, in explicabo inventore quasi enim iusto voluptate quibusdam
      eius, quas corporis. Aperiam vel minima nulla sint animi in ducimus.
    </Text>
  );
};

export const Base: Story = {
  args: {
    inverse: false,
    iconName: 'arrowdown',
    iconSize: 14,
    triggerCopy: 'How is this compared to Selenium, Cypress, or Playwright?',
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Inverse: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => (
    <Accordion inverse={args.inverse}>
      <Accordion.Item id="1" inverse={args.inverse}>
        <Accordion.Trigger iconName={args.iconName} inverse={args.inverse}>
          {args.triggerCopy}
        </Accordion.Trigger>
        <Accordion.Panel inverse={args.inverse}>
          <ExamplePanelContent inverse={args.inverse} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

export const StartingOpen: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion defaultValue="1">
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithAlternateIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'heart',
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithNoIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: false,
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};
export const Group: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  parameters: {
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => {
    return (
      <Accordion>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item key={i} id={`item-${id}`}>
              <Accordion.Trigger iconName={args.iconName}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupInverse: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
  render: (args) => {
    return (
      <Accordion inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupOpenStart: Story = {
  ...Base,
  name: 'Group: Starting Open',
  args: {
    ...Base.args,
    inverse: false,
  },
  render: (args) => {
    return (
      <Accordion defaultValue="item-2" inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupOpenStartInverse: Story = {
  ...Base,
  name: 'Group: Starting Open and Inverse',
  args: {
    ...Base.args,
    inverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  render: (args) => {
    return (
      <Accordion defaultValue="item-0" inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupWithAlternateIcons: Story = {
  ...Base,
  args: {
    ...Base.args,
    inverse: false,
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  render: (args) => {
    return (
      <Accordion inverse={args.inverse}>
        {accordions.map((acc, i) => {
          const { id, triggerCopy, icon } = acc;

          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger inverse={args.inverse} iconName={icon}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const SingleWithLargeIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 24,
  },
};

export const SingleWithSmallIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 10,
  },
};

export const WithCloudIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'cloudhollow',
  },
};

export const WithBookIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'book',
  },
};

export const WithStarIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'star',
  },
};

export const WithCheckIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'check',
  },
};

export const WithLockIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'lock',
  },
};

export const WithEyeIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'eye',
  },
};

export const WithFaceHappyIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'facehappy',
  },
};

export const WithAccessibilityIcon: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconName: 'accessibilityalt',
  },
};

export const TwoItemGroup: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            First Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Second Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const ThreeItemGroup: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            First Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Second Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Third Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const FiveItemGroup: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        {[1, 2, 3, 4, 5].map((num) => (
          <Accordion.Item key={num} id={`${num}`}>
            <Accordion.Trigger iconName={args.iconName}>
              Question {num}
            </Accordion.Trigger>
            <Accordion.Panel>
              <ExamplePanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};

export const TenItemGroup: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Accordion.Item key={num} id={`${num}`}>
            <Accordion.Trigger iconName={args.iconName}>
              Question {num}
            </Accordion.Trigger>
            <Accordion.Panel>
              <ExamplePanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};

export const ShortContentPanel: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Short answer.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const LongContentPanel: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const VeryLongContentPanel: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const ShortTriggerText: Story = {
  ...Base,
  args: {
    ...Base.args,
    triggerCopy: 'Why?',
  },
};

export const LongTriggerText: Story = {
  ...Base,
  args: {
    ...Base.args,
    triggerCopy:
      'This is a very long question that should demonstrate how the accordion handles extended trigger text content',
  },
};

export const VeryLongTriggerText: Story = {
  ...Base,
  args: {
    ...Base.args,
    triggerCopy:
      'This is an extremely long question that should demonstrate how the accordion component handles very extended trigger text content and whether it wraps properly across multiple lines when necessary',
  },
};

export const InverseWithCloudIcon: Story = {
  ...Inverse,
  args: {
    ...Inverse.args,
    iconName: 'cloudhollow',
  },
};

export const InverseWithHeartIcon: Story = {
  ...Inverse,
  args: {
    ...Inverse.args,
    iconName: 'heart',
  },
};

export const InverseWithLargeIcon: Story = {
  ...Inverse,
  args: {
    ...Inverse.args,
    iconSize: 24,
  },
};

export const InverseWithSmallIcon: Story = {
  ...Inverse,
  args: {
    ...Inverse.args,
    iconSize: 10,
  },
};

export const InverseNoIcon: Story = {
  ...Inverse,
  args: {
    ...Inverse.args,
    iconName: false,
  },
};

export const GroupTwoItemsInverse: Story = {
  ...GroupInverse,
  render: (args) => {
    return (
      <Accordion inverse={args.inverse}>
        {accordions.slice(0, 2).map((acc, i) => {
          const { id, triggerCopy } = acc;
          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const GroupThreeItemsInverse: Story = {
  ...GroupInverse,
  render: (args) => {
    return (
      <Accordion inverse={args.inverse}>
        {accordions.slice(0, 3).map((acc, i) => {
          const { id, triggerCopy } = acc;
          return (
            <Accordion.Item inverse={args.inverse} key={i} id={`item-${id}`}>
              <Accordion.Trigger
                iconName={args.iconName}
                inverse={args.inverse}
              >
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel inverse={args.inverse}>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const OpenFirstItem: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion defaultValue="item-0">
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;
          return (
            <Accordion.Item key={i} id={`item-${id}`}>
              <Accordion.Trigger iconName={args.iconName}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const OpenThirdItem: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion defaultValue="item-2">
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;
          return (
            <Accordion.Item key={i} id={`item-${id}`}>
              <Accordion.Trigger iconName={args.iconName}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const OpenLastItem: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion defaultValue="item-3">
        {accordions.map((acc, i) => {
          const { id, triggerCopy } = acc;
          return (
            <Accordion.Item key={i} id={`item-${id}`}>
              <Accordion.Trigger iconName={args.iconName}>
                {triggerCopy}
              </Accordion.Trigger>
              <Accordion.Panel>
                <ExamplePanelContent inverse={args.inverse} />
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
  },
};

export const MixedIconSizes: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName="arrowdown" iconSize={10}>
            Small icon (10px)
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName="arrowdown" iconSize={14}>
            Default icon (14px)
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName="arrowdown" iconSize={20}>
            Large icon (20px)
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const MixedIcons: Story = {
  ...Base,
  render: (args) => {
    const icons = ['arrowdown', 'heart', 'star', 'check'];
    return (
      <Accordion>
        {icons.map((icon, i) => (
          <Accordion.Item key={i} id={`${i}`}>
            <Accordion.Trigger iconName={icon as any}>
              Item with {icon} icon
            </Accordion.Trigger>
            <Accordion.Panel>
              <ExamplePanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};

export const SomeWithoutIcons: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName="arrowdown">
            With icon
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={false}>Without icon</Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName="heart">With icon</Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const SingleItemClosed: Story = {
  ...Base,
  name: 'Single Item - Closed State',
};

export const SingleItemOpen: Story = {
  ...StartingOpen,
  name: 'Single Item - Open State',
};

export const TwoItemsBothClosed: Story = {
  ...TwoItemGroup,
  name: 'Two Items - Both Closed',
};

export const TwoItemsFirstOpen: Story = {
  ...Base,
  name: 'Two Items - First Open',
  render: (args) => {
    return (
      <Accordion defaultValue="1">
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            First Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Second Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const TwoItemsSecondOpen: Story = {
  ...Base,
  name: 'Two Items - Second Open',
  render: (args) => {
    return (
      <Accordion defaultValue="2">
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            First Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Second Question
          </Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithNestedText: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>
              This is the first paragraph of content in the accordion panel.
            </Text>
            <Text>
              This is the second paragraph with more information about the topic.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithBulletList: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>
              <ul>
                <li>First bullet point</li>
                <li>Second bullet point</li>
                <li>Third bullet point</li>
                <li>Fourth bullet point</li>
              </ul>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const WithNumberedList: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            {args.triggerCopy}
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>
              <ol>
                <li>First step in the process</li>
                <li>Second step in the process</li>
                <li>Third step in the process</li>
                <li>Fourth step in the process</li>
              </ol>
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const FAQ_Pricing: Story = {
  ...Base,
  name: 'FAQ - Pricing',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            What is the cost?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Our pricing starts at $99 per month for the basic plan.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Is there a free trial?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Yes, we offer a 14-day free trial with no credit card required.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Can I cancel anytime?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Yes, you can cancel your subscription at any time.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const FAQ_Technical: Story = {
  ...Base,
  name: 'FAQ - Technical',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            What browsers are supported?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>We support Chrome, Firefox, Safari, and Edge.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Is there an API available?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Yes, we provide a comprehensive REST API for all plans.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            What about mobile support?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Our platform is fully responsive and mobile-friendly.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const FAQ_Security: Story = {
  ...Base,
  name: 'FAQ - Security',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            Is my data encrypted?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Yes, all data is encrypted both in transit and at rest.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Are you GDPR compliant?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Yes, we are fully GDPR compliant.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Where is data stored?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Data is stored in secure data centers in the US and EU.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Help_GettingStarted: Story = {
  ...Base,
  name: 'Help - Getting Started',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            How do I create an account?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Click the Sign Up button and follow the registration steps.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            How do I reset my password?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Click Forgot Password on the login page to reset it.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Where can I find tutorials?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Visit our documentation section for comprehensive tutorials.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Help_Troubleshooting: Story = {
  ...Base,
  name: 'Help - Troubleshooting',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            Page won't load
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Try clearing your browser cache and refreshing the page.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Cannot upload files
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Check that your file size is under 10MB and in a supported format.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Email notifications not received
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Check your spam folder and email notification settings.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Product_Features: Story = {
  ...Base,
  name: 'Product - Features',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            Real-time Collaboration
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Work together with your team in real-time with live updates.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Advanced Analytics
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Get detailed insights with our comprehensive analytics dashboard.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Custom Integrations
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Connect with your favorite tools through our integration marketplace.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Product_Comparison: Story = {
  ...Base,
  name: 'Product - Comparison',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            vs Competitor A
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>We offer better performance and lower pricing than Competitor A.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            vs Competitor B
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Unlike Competitor B, we include unlimited team members on all plans.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            vs Open Source Solutions
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>We provide enterprise support and managed hosting.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const Support_Contact: Story = {
  ...Base,
  name: 'Support - Contact Options',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            Email Support
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Contact us at support@example.com for help within 24 hours.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Live Chat
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Chat with us live Monday-Friday, 9am-5pm EST.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Phone Support
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Premium plan members can call us at 1-800-EXAMPLE.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const LargeGroupEight: Story = {
  ...Base,
  name: 'Large Group - 8 Items',
  render: (args) => {
    return (
      <Accordion>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Accordion.Item key={num} id={`${num}`}>
            <Accordion.Trigger iconName={args.iconName}>
              Question {num}
            </Accordion.Trigger>
            <Accordion.Panel>
              <ExamplePanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};

export const LargeGroupTwelve: Story = {
  ...Base,
  name: 'Large Group - 12 Items',
  render: (args) => {
    return (
      <Accordion>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <Accordion.Item key={num} id={`${num}`}>
            <Accordion.Trigger iconName={args.iconName}>
              Question {num}
            </Accordion.Trigger>
            <Accordion.Panel>
              <ExamplePanelContent inverse={args.inverse} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};

export const MobileViewport320: Story = {
  ...Base,
  name: 'Mobile Viewport - 320px',
  parameters: {
    chromatic: {
      viewports: [320],
    },
  },
};

export const MobileViewport375: Story = {
  ...Base,
  name: 'Mobile Viewport - 375px',
  parameters: {
    chromatic: {
      viewports: [375],
    },
  },
};

export const TabletViewport768: Story = {
  ...Base,
  name: 'Tablet Viewport - 768px',
  parameters: {
    chromatic: {
      viewports: [768],
    },
  },
};

export const DesktopViewport1024: Story = {
  ...Base,
  name: 'Desktop Viewport - 1024px',
  parameters: {
    chromatic: {
      viewports: [1024],
    },
  },
};

export const DesktopViewport1440: Story = {
  ...Base,
  name: 'Desktop Viewport - 1440px',
  parameters: {
    chromatic: {
      viewports: [1440],
    },
  },
};

export const WideScreenViewport1920: Story = {
  ...Base,
  name: 'Wide Screen Viewport - 1920px',
  parameters: {
    chromatic: {
      viewports: [1920],
    },
  },
};

export const AllViewports: Story = {
  ...Base,
  name: 'All Viewport Sizes',
  parameters: {
    chromatic: {
      viewports: [320, 375, 640, 768, 1024, 1440, 1920],
    },
  },
};

export const GroupInverseMobile: Story = {
  ...GroupInverse,
  name: 'Group Inverse - Mobile',
  parameters: {
    chromatic: {
      viewports: [320],
    },
  },
};

export const GroupInverseTablet: Story = {
  ...GroupInverse,
  name: 'Group Inverse - Tablet',
  parameters: {
    chromatic: {
      viewports: [768],
    },
  },
};

export const GroupInverseDesktop: Story = {
  ...GroupInverse,
  name: 'Group Inverse - Desktop',
  parameters: {
    chromatic: {
      viewports: [1440],
    },
  },
};

export const EmptyTriggerText: Story = {
  ...Base,
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}></Accordion.Trigger>
          <Accordion.Panel>
            <ExamplePanelContent inverse={args.inverse} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const IconSize8: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 8,
  },
};

export const IconSize16: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 16,
  },
};

export const IconSize20: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 20,
  },
};

export const IconSize28: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 28,
  },
};

export const IconSize32: Story = {
  ...Base,
  args: {
    ...Base.args,
    iconSize: 32,
  },
};

export const RealWorldExample_ProductSpecs: Story = {
  ...Base,
  name: 'Real World - Product Specifications',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            Dimensions & Weight
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Height: 5.8", Width: 2.8", Depth: 0.3", Weight: 6.1 oz</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Technical Specifications
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Processor: A15 Bionic, RAM: 6GB, Storage: 128GB/256GB/512GB</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Battery & Charging
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Battery: 3200mAh, Fast charging: 20W, Wireless charging supported</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const RealWorldExample_ShippingInfo: Story = {
  ...Base,
  name: 'Real World - Shipping Information',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            Domestic Shipping
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Free shipping on orders over $50. Standard delivery: 3-5 business days.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            International Shipping
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Available to most countries. Delivery time: 7-14 business days.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            Returns & Exchanges
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>30-day return policy. Items must be unused and in original packaging.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};

export const RealWorldExample_CareersFAQ: Story = {
  ...Base,
  name: 'Real World - Careers FAQ',
  render: (args) => {
    return (
      <Accordion>
        <Accordion.Item id="1">
          <Accordion.Trigger iconName={args.iconName}>
            What is the application process?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Submit your resume, complete a phone screen, technical interview, and final interview.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="2">
          <Accordion.Trigger iconName={args.iconName}>
            Do you offer remote positions?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Yes, we offer fully remote, hybrid, and in-office positions.</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item id="3">
          <Accordion.Trigger iconName={args.iconName}>
            What benefits do you provide?
          </Accordion.Trigger>
          <Accordion.Panel>
            <Text>Health insurance, 401k matching, unlimited PTO, and professional development budget.</Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );
  },
};
