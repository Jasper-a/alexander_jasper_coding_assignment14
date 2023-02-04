import React from 'react'
import { Story, Meta } from '@storybook/react'

import Skills from './Skills'
import { SkillsProps } from './Skills.types'

export default {
  title: 'Coding14/Skills',
  component: Skills,
  argTypes: {},
} as Meta<typeof Skills>

const Template: Story<SkillsProps> = (args) => <Skills {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#ffffff',
	fontFamily: 'Consolas',
}