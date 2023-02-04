import React from 'react'
import { Story, Meta } from '@storybook/react'

import Work from './Work'
import { WorkProps } from './Work.types'

export default {
  title: 'Coding14/Work',
  component: Work,
  argTypes: {},
} as Meta<typeof Work>

const Template: Story<WorkProps> = (args) => <Work {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#ffffff',
	fontFamily: 'Consolas',
}