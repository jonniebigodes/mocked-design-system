import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  render: ({ src, ...args }) => (
    <div>
      <Avatar isLoading {...args} />
      <Avatar username="Tom Coleman" {...args} />
      <Avatar
        username="Tom Coleman"
        src={src || 'https://avatars2.githubusercontent.com/u/132554'}
        {...args}
      />
    </div>
  ),
};

export const Large = { args: { ...Base.args, size: 'large' } };

export const Medium = { args: Base.args };

export const Small = { args: { ...Base.args, size: 'small' } };

export const Tiny = { args: { ...Base.args, size: 'tiny' } };

export const Organization = {
  args: {
    type: 'organization',
    username: 'Chromatic',
    src: '/chromatic-logo-square.png',
  },
};

export const LargeUser: Story = {
  args: {
    size: 'large',
    username: 'Sarah Johnson',
    src: 'https://avatars2.githubusercontent.com/u/263385',
  },
};

export const LargeOrganization: Story = {
  args: {
    size: 'large',
    type: 'organization',
    username: 'GitHub',
  },
};

export const MediumUser: Story = {
  args: {
    size: 'medium',
    username: 'Mike Smith',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
};

export const MediumOrganization: Story = {
  args: {
    size: 'medium',
    type: 'organization',
    username: 'Storybook',
  },
};

export const SmallUser: Story = {
  args: {
    size: 'small',
    username: 'Emily Chen',
    src: 'https://avatars2.githubusercontent.com/u/263385',
  },
};

export const SmallOrganization: Story = {
  args: {
    size: 'small',
    type: 'organization',
    username: 'React',
  },
};

export const TinyUser: Story = {
  args: {
    size: 'tiny',
    username: 'John Doe',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
};

export const TinyOrganization: Story = {
  args: {
    size: 'tiny',
    type: 'organization',
    username: 'Vue',
  },
};

export const LoadingLarge: Story = {
  args: {
    size: 'large',
    isLoading: true,
  },
};

export const LoadingMedium: Story = {
  args: {
    size: 'medium',
    isLoading: true,
  },
};

export const LoadingSmall: Story = {
  args: {
    size: 'small',
    isLoading: true,
  },
};

export const LoadingTiny: Story = {
  args: {
    size: 'tiny',
    isLoading: true,
  },
};

export const LoadingOrgLarge: Story = {
  args: {
    size: 'large',
    type: 'organization',
    isLoading: true,
  },
};

export const LoadingOrgMedium: Story = {
  args: {
    size: 'medium',
    type: 'organization',
    isLoading: true,
  },
};

export const InitialOnlyA: Story = {
  args: {
    username: 'Alice Anderson',
  },
};

export const InitialOnlyB: Story = {
  args: {
    username: 'Bob Brown',
  },
};

export const InitialOnlyC: Story = {
  args: {
    username: 'Charlie Cooper',
  },
};

export const InitialOnlyD: Story = {
  args: {
    username: 'Diana Davis',
  },
};

export const InitialOnlyE: Story = {
  args: {
    username: 'Ethan Evans',
  },
};

export const InitialOnlyF: Story = {
  args: {
    username: 'Fiona Fisher',
  },
};

export const InitialOnlyG: Story = {
  args: {
    username: 'George Garcia',
  },
};

export const InitialOnlyH: Story = {
  args: {
    username: 'Hannah Harris',
  },
};

export const InitialOnlyI: Story = {
  args: {
    username: 'Ian Irving',
  },
};

export const InitialOnlyJ: Story = {
  args: {
    username: 'Julia Jackson',
  },
};

export const InitialOnlyK: Story = {
  args: {
    username: 'Kevin King',
  },
};

export const InitialOnlyL: Story = {
  args: {
    username: 'Laura Lewis',
  },
};

export const InitialOnlyM: Story = {
  args: {
    username: 'Michael Martinez',
  },
};

export const InitialOnlyN: Story = {
  args: {
    username: 'Nina Nelson',
  },
};

export const InitialOnlyO: Story = {
  args: {
    username: 'Oliver Olson',
  },
};

export const InitialOnlyP: Story = {
  args: {
    username: 'Patricia Parker',
  },
};

export const InitialOnlyQ: Story = {
  args: {
    username: 'Quincy Quinn',
  },
};

export const InitialOnlyR: Story = {
  args: {
    username: 'Rachel Roberts',
  },
};

export const InitialOnlyS: Story = {
  args: {
    username: 'Samuel Scott',
  },
};

export const InitialOnlyT: Story = {
  args: {
    username: 'Tina Turner',
  },
};

export const InitialOnlyU: Story = {
  args: {
    username: 'Ulysses Underwood',
  },
};

export const InitialOnlyV: Story = {
  args: {
    username: 'Victoria Valdez',
  },
};

export const InitialOnlyW: Story = {
  args: {
    username: 'Walter White',
  },
};

export const InitialOnlyX: Story = {
  args: {
    username: 'Xena Xavier',
  },
};

export const InitialOnlyY: Story = {
  args: {
    username: 'Yasmine Young',
  },
};

export const InitialOnlyZ: Story = {
  args: {
    username: 'Zachary Zimmerman',
  },
};

export const InitialLargeA: Story = {
  args: {
    size: 'large',
    username: 'Alexander Adams',
  },
};

export const InitialSmallB: Story = {
  args: {
    size: 'small',
    username: 'Benjamin Baker',
  },
};

export const InitialTinyC: Story = {
  args: {
    size: 'tiny',
    username: 'Catherine Clark',
  },
};

export const OrgInitialA: Story = {
  args: {
    type: 'organization',
    username: 'Apple Inc',
  },
};

export const OrgInitialB: Story = {
  args: {
    type: 'organization',
    username: 'Basecamp',
  },
};

export const OrgInitialC: Story = {
  args: {
    type: 'organization',
    username: 'Cloudflare',
  },
};

export const OrgInitialD: Story = {
  args: {
    type: 'organization',
    username: 'Docker',
  },
};

export const OrgInitialE: Story = {
  args: {
    type: 'organization',
    username: 'Elastic',
  },
};

export const OrgInitialF: Story = {
  args: {
    type: 'organization',
    username: 'Firebase',
  },
};

export const OrgInitialG: Story = {
  args: {
    type: 'organization',
    username: 'GitLab',
  },
};

export const OrgInitialH: Story = {
  args: {
    type: 'organization',
    username: 'HashiCorp',
  },
};

export const UserWithImage1: Story = {
  args: {
    username: 'Developer One',
    src: 'https://avatars2.githubusercontent.com/u/1',
  },
};

export const UserWithImage2: Story = {
  args: {
    username: 'Developer Two',
    src: 'https://avatars2.githubusercontent.com/u/2',
  },
};

export const UserWithImage3: Story = {
  args: {
    username: 'Developer Three',
    src: 'https://avatars2.githubusercontent.com/u/3',
  },
};

export const UserWithImage4: Story = {
  args: {
    username: 'Developer Four',
    src: 'https://avatars2.githubusercontent.com/u/4',
  },
};

export const UserWithImage5: Story = {
  args: {
    username: 'Developer Five',
    src: 'https://avatars2.githubusercontent.com/u/5',
  },
};

export const LargeUserWithImage: Story = {
  args: {
    size: 'large',
    username: 'Senior Developer',
    src: 'https://avatars2.githubusercontent.com/u/10',
  },
};

export const SmallUserWithImage: Story = {
  args: {
    size: 'small',
    username: 'Junior Dev',
    src: 'https://avatars2.githubusercontent.com/u/20',
  },
};

export const TinyUserWithImage: Story = {
  args: {
    size: 'tiny',
    username: 'Contributor',
    src: 'https://avatars2.githubusercontent.com/u/30',
  },
};

export const OrgLargeWithImage: Story = {
  args: {
    size: 'large',
    type: 'organization',
    username: 'Tech Corp',
    src: '/chromatic-logo-square.png',
  },
};

export const OrgSmallWithImage: Story = {
  args: {
    size: 'small',
    type: 'organization',
    username: 'Startup Inc',
    src: '/chromatic-logo-square.png',
  },
};

export const OrgTinyWithImage: Story = {
  args: {
    size: 'tiny',
    type: 'organization',
    username: 'Mini Org',
    src: '/chromatic-logo-square.png',
  },
};

export const ShortUsername: Story = {
  args: {
    username: 'Jo',
  },
};

export const LongUsername: Story = {
  args: {
    username: 'Christopher Alexander Montgomery III',
  },
};

export const UsernameWithNumbers: Story = {
  args: {
    username: 'user123',
  },
};

export const UsernameWithSpecialChars: Story = {
  args: {
    username: 'user_name',
  },
};

export const UsernameWithHyphens: Story = {
  args: {
    username: 'user-name',
  },
};

export const UsernameLowercase: Story = {
  args: {
    username: 'lowercase',
  },
};

export const UsernameUppercase: Story = {
  args: {
    username: 'UPPERCASE',
  },
};

export const UsernameMixedCase: Story = {
  args: {
    username: 'MixedCase',
  },
};

export const UsernameWithDots: Story = {
  args: {
    username: 'first.last',
  },
};

export const SingleCharUsername: Story = {
  args: {
    username: 'X',
  },
};

export const NumericUsername: Story = {
  args: {
    username: '42',
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Avatar username="User 1" src="https://avatars2.githubusercontent.com/u/1" />
      <Avatar username="User 2" src="https://avatars2.githubusercontent.com/u/2" />
      <Avatar username="User 3" src="https://avatars2.githubusercontent.com/u/3" />
      <Avatar username="User 4" src="https://avatars2.githubusercontent.com/u/4" />
    </div>
  ),
};

export const AvatarStack: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '4px' }}>
      <Avatar size="small" username="A" />
      <Avatar size="small" username="B" />
      <Avatar size="small" username="C" />
      <Avatar size="small" username="D" />
      <Avatar size="small" username="E" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="tiny" username="Tiny" />
      <Avatar size="small" username="Small" />
      <Avatar size="medium" username="Medium" />
      <Avatar size="large" username="Large" />
    </div>
  ),
};

export const AllSizesWithImages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="tiny" username="T" src="https://avatars2.githubusercontent.com/u/1" />
      <Avatar size="small" username="S" src="https://avatars2.githubusercontent.com/u/2" />
      <Avatar size="medium" username="M" src="https://avatars2.githubusercontent.com/u/3" />
      <Avatar size="large" username="L" src="https://avatars2.githubusercontent.com/u/4" />
    </div>
  ),
};

export const UserAndOrgComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar type="user" username="User" />
      <Avatar type="organization" username="Org" />
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="tiny" isLoading />
      <Avatar size="small" isLoading />
      <Avatar size="medium" isLoading />
      <Avatar size="large" isLoading />
    </div>
  ),
};

export const OrgLoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar size="tiny" type="organization" isLoading />
      <Avatar size="small" type="organization" isLoading />
      <Avatar size="medium" type="organization" isLoading />
      <Avatar size="large" type="organization" isLoading />
    </div>
  ),
};

export const InitialsGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px' }}>
      <Avatar username="Alice" />
      <Avatar username="Bob" />
      <Avatar username="Charlie" />
      <Avatar username="Diana" />
      <Avatar username="Ethan" />
      <Avatar username="Fiona" />
      <Avatar username="George" />
      <Avatar username="Hannah" />
      <Avatar username="Ian" />
      <Avatar username="Julia" />
      <Avatar username="Kevin" />
      <Avatar username="Laura" />
    </div>
  ),
};

export const MixedContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Avatar username="User 1" src="https://avatars2.githubusercontent.com/u/1" />
      <Avatar username="User 2" />
      <Avatar isLoading />
      <Avatar username="User 3" src="https://avatars2.githubusercontent.com/u/3" />
      <Avatar type="organization" username="Org" />
      <Avatar username="User 4" />
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Avatar size="large" username="Desktop View" />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <Avatar size="medium" username="Tablet View" />
      </div>
      <div>
        <Avatar size="small" username="Mobile View" />
      </div>
    </div>
  ),
};

export const DarkBackground: Story = {
  render: () => (
    <div style={{ background: '#1a1a1a', padding: '20px' }}>
      <Avatar username="Dark Mode" src="https://avatars2.githubusercontent.com/u/132554" />
    </div>
  ),
};

export const LightBackground: Story = {
  render: () => (
    <div style={{ background: '#ffffff', padding: '20px' }}>
      <Avatar username="Light Mode" src="https://avatars2.githubusercontent.com/u/132554" />
    </div>
  ),
};

export const ColoredBackground: Story = {
  render: () => (
    <div style={{ background: '#e3f2fd', padding: '20px' }}>
      <Avatar username="Colored BG" src="https://avatars2.githubusercontent.com/u/132554" />
    </div>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <div style={{ border: '2px solid #ccc', padding: '10px', display: 'inline-block' }}>
      <Avatar username="Bordered" src="https://avatars2.githubusercontent.com/u/132554" />
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Avatar size="small" username="John" src="https://avatars2.githubusercontent.com/u/132554" />
      <span>John Doe - Software Engineer</span>
    </div>
  ),
};

export const VerticalAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Avatar username="First" />
      <Avatar username="Second" />
      <Avatar username="Third" />
    </div>
  ),
};

export const CenteredAvatar: Story = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <Avatar size="large" username="Centered" src="https://avatars2.githubusercontent.com/u/132554" />
    </div>
  ),
};

export const AvatarCard: Story = {
  render: () => (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', textAlign: 'center', width: '200px' }}>
      <Avatar size="large" username="Card User" src="https://avatars2.githubusercontent.com/u/132554" />
      <h3 style={{ marginTop: '12px', marginBottom: '4px' }}>Card User</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>Software Developer</p>
    </div>
  ),
};

export const ListItem: Story = {
  render: () => (
    <div style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderBottom: '1px solid #ddd' }}>
        <Avatar size="small" username="User 1" />
        <span>User 1</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderBottom: '1px solid #ddd' }}>
        <Avatar size="small" username="User 2" />
        <span>User 2</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px' }}>
        <Avatar size="small" username="User 3" />
        <span>User 3</span>
      </div>
    </div>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '20px' }}>
      <Avatar username="Grid 1" src="https://avatars2.githubusercontent.com/u/1" />
      <Avatar username="Grid 2" src="https://avatars2.githubusercontent.com/u/2" />
      <Avatar username="Grid 3" src="https://avatars2.githubusercontent.com/u/3" />
      <Avatar username="Grid 4" src="https://avatars2.githubusercontent.com/u/4" />
      <Avatar username="Grid 5" />
      <Avatar username="Grid 6" />
      <Avatar username="Grid 7" />
      <Avatar username="Grid 8" />
    </div>
  ),
};

export const TeamView: Story = {
  render: () => (
    <div style={{ padding: '20px' }}>
      <h3 style={{ marginBottom: '16px' }}>Development Team</h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <Avatar size="large" username="Team Lead" src="https://avatars2.githubusercontent.com/u/1" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>Team Lead</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar size="large" username="Developer 1" src="https://avatars2.githubusercontent.com/u/2" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>Developer 1</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar size="large" username="Developer 2" src="https://avatars2.githubusercontent.com/u/3" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>Developer 2</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Avatar size="large" username="Designer" src="https://avatars2.githubusercontent.com/u/4" />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>Designer</div>
        </div>
      </div>
    </div>
  ),
};
