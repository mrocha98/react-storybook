import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ServerName from '.'

export default {
  title: 'Server Name',
  component: ServerName,
  args: {
    title: 'general'
  }
} as Meta

export const General: Story = (args) => <ServerName title="" {...args} />
