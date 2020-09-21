import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ChannelInfo from '.'

export default {
  title: 'Channel Info',
  component: ChannelInfo,
  args: {
    title: 'general',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  }
} as Meta

export const General: Story = (args) => <ChannelInfo title="" {...args} />
