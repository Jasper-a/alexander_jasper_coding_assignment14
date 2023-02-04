import React from 'react'
import { Story, Meta } from '@storybook/react'

import DeveloperSetup from './DeveloperSetup'
import { DeveloperSetupProps } from './DeveloperSetup.types'

export default {
  title: 'Coding14/DeveloperSetup',
  component: DeveloperSetup,
  argTypes: {},
} as Meta<typeof DeveloperSetup>

const Template: Story<DeveloperSetupProps> = (args) => <DeveloperSetup {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#ffffff',
	fontFamily: 'Consolas',
}