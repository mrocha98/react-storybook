import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ServerButton from '.'

export default {
  title: 'Server Button',
  component: ServerButton,
  args: {
    mentions: 5
  }
} as Meta

export const Default: Story = (args) => <ServerButton {...args} />

export const Home: Story = (args) => <ServerButton {...args} />
Home.args = {
  isHome: true
}
