import React from 'react'
import { Story, Meta } from '@storybook/react'

import Resources from './Resources'
import { ResourcesProps } from './Resources.types'

export default {
  title: 'Coding14/Resources',
  component: Resources,
  argTypes: {},
} as Meta<typeof Resources>

const Template: Story<ResourcesProps> = (args) => <Resources {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#ffffff',
	fontFamily: 'Consolas',
}