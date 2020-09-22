import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import UserRow from '.'

export default {
  title: 'User Row',
  component: UserRow,
  args: {
    nickname: 'John Doe'
  }
} as Meta

export const User: Story = (args) => <UserRow nickname="" {...args} />

export const Bot: Story = (args) => <UserRow nickname="" {...args} />
Bot.args = {
  isBot: true
}
