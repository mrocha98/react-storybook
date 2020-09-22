import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import UserInfo from '.'

export default {
  title: 'User Info',
  component: UserInfo,
  args: {
    name: 'John Doe',
    tag: '#1234'
  }
} as Meta

export const User: Story = (args) => <UserInfo name="" tag="" {...args} />
