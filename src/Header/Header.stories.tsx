import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { within, userEvent } from 'storybook/test';
import { Header } from './Header';
import { defaultLinks } from './data';
import { SubNav } from '../SubNav';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Radix uses PointerEvent for all interactions
// see: https://github.com/radix-ui/primitives/issues/1220

export const DesktopLight: Story = {
  args: {
    theme: 'light',
    links: defaultLinks,
  },
  globals: {
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { viewports: [940, 1024, 1280, 1536] },
  },
};

export const DesktopDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    ...DesktopLight.globals,
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopLightSticky: Story = {
  args: {
    ...DesktopLight.args,
    isSticky: true,
  },
};

export const DesktopDarkSticky: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    isSticky: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const DesktopLoggedOut: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: false,
  },
};

export const DesktopLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
  },
};
export const DesktopDarkLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const DesktopLoggedOutMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    maintenanceMode: true,
  },
};

export const DesktopLoggedInMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    maintenanceMode: true,
  },
};

export const WithSubNav: Story = {
  render: (args) => (
    <>
      <Header {...args} />
      <SubNav
        theme="dark"
        label="features"
        items={[
          { id: '1', label: 'UI Tests', href: '/ui-tests' },
          {
            id: '2',
            label: 'Visual test',
            href: '/visual-tests',
            isActive: true,
          },
          { id: '3', label: 'Interaction test', href: '/interaction-tests' },
          { id: '4', label: 'TurboSnap', href: '/turbosnap', external: true },
        ]}
      />
    </>
  ),
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopLightActive: Story = {
  args: {
    ...DesktopLight.args,
    desktopActiveId: 'features',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkActive: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    desktopActiveId: 'pricing',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopLightOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
  },
  decorators: [(storyFn) => <div style={{ height: '800px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Platform',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const DesktopDarkOpen: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'lg' },
  },
  parameters: {
    chromatic: { pauseAnimationAtEnd: true, delay: 600 },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Platform',
    });
    MenuButton.focus();
    await userEvent.keyboard('{enter}');
  },
};

export const TabletLight: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    backgrounds: { value: 'light' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
};

export const TabletDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
};

export const TabletOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
  decorators: [(storyFn) => <div style={{ height: '900px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};

export const TabletExpandSubMenu: Story = {
  ...TabletOpen,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard('{enter}');
  },
};

export const MobileOpen: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320, 640, 768, 939] },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};

export const DesktopFullWidth: Story = {
  args: {
    ...DesktopLight.args,
    fullWidth: true,
  },
};

export const MobileFullWidth: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'xs' },
  },
  decorators: DesktopLightOpen.decorators,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};

export const DesktopLightLoggedInSticky: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    isSticky: true,
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkLoggedInSticky: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    loggedIn: true,
    isSticky: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const TabletLightLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
  },
  globals: {
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [768, 939] },
  },
};

export const TabletDarkLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    loggedIn: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [768, 939] },
  },
};

export const MobileLight: Story = {
  args: {
    ...DesktopLight.args,
  },
  globals: {
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320, 375, 414] },
  },
};

export const MobileDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'xs' },
  },
  parameters: {
    chromatic: { viewports: [320, 375, 414] },
  },
};

export const MobileLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
  },
  globals: {
    viewport: { value: 'xs' },
  },
};

export const MobileDarkLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    loggedIn: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'xs' },
  },
};

export const MobileLoggedOut: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: false,
  },
  globals: {
    viewport: { value: 'xs' },
  },
};

export const TabletLoggedOut: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: false,
  },
  globals: {
    viewport: { value: 'md' },
  },
};

export const DesktopFullWidthDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    fullWidth: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const DesktopFullWidthLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    fullWidth: true,
    loggedIn: true,
  },
};

export const TabletFullWidth: Story = {
  args: {
    ...DesktopLight.args,
    fullWidth: true,
  },
  globals: {
    viewport: { value: 'md' },
  },
};

export const TabletDarkMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    maintenanceMode: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
};

export const MobileMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    maintenanceMode: true,
  },
  globals: {
    viewport: { value: 'xs' },
  },
};

export const MobileDarkMaintenance: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    maintenanceMode: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'xs' },
  },
};

export const DesktopActiveFeatures: Story = {
  args: {
    ...DesktopLight.args,
    desktopActiveId: 'features',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkActiveDocs: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    desktopActiveId: 'docs',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopActiveAddons: Story = {
  args: {
    ...DesktopLight.args,
    desktopActiveId: 'addons',
  },
  parameters: {
    ...DesktopLight.parameters,
  },
};

export const DesktopDarkFullWidthSticky: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    fullWidth: true,
    isSticky: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const TabletStickyLight: Story = {
  args: {
    ...DesktopLight.args,
    isSticky: true,
  },
  globals: {
    viewport: { value: 'md' },
  },
};

export const TabletStickyDark: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    isSticky: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
};

export const MobileSticky: Story = {
  args: {
    ...DesktopLight.args,
    isSticky: true,
  },
  globals: {
    viewport: { value: 'xs' },
  },
};

export const MobileDarkSticky: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    isSticky: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'xs' },
  },
};

export const DesktopDarkMaintenanceLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    loggedIn: true,
    maintenanceMode: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const TabletMaintenanceLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    maintenanceMode: true,
  },
  globals: {
    viewport: { value: 'md' },
  },
};

export const MobileMaintenanceLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    loggedIn: true,
    maintenanceMode: true,
  },
  globals: {
    viewport: { value: 'xs' },
  },
};

export const DesktopLightFullWidthActive: Story = {
  args: {
    ...DesktopLight.args,
    fullWidth: true,
    desktopActiveId: 'pricing',
  },
};

export const TabletDarkOpenLoggedIn: Story = {
  args: {
    ...DesktopLight.args,
    theme: 'dark',
    loggedIn: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
    viewport: { value: 'md' },
  },
  parameters: {
    chromatic: { viewports: [768, 939] },
  },
  decorators: [(storyFn) => <div style={{ height: '900px' }}>{storyFn()}</div>],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const MenuButton = await canvas.findByRole('button', {
      name: 'Toggle Menu',
    });
    await userEvent.click(MenuButton);
  },
};
