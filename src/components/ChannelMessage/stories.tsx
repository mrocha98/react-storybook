import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ChannelMessage from '.'

export default {
  title: 'Channel Message',
  component: ChannelMessage,
  args: {
    author: 'John Doe',
    date: '11/09/2001',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  }
} as Meta

export const UserMessage: Story = (args) => <ChannelMessage author="" date="" content="" {...args} />

export const BotMessage: Story = (args) => <ChannelMessage author="" date="" content="" {...args} />
BotMessage.args = {
  isBot: true
}
