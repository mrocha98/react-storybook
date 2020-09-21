import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ChannelButton from '.'

export default {
  title: 'Channel Button',
  component: ChannelButton,
  args: {
    channelName: 'general'
  }
} as Meta

export const General: Story = (args) => <ChannelButton {...args} />
