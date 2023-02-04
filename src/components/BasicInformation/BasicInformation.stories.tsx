import React from 'react'
import { Story, Meta } from '@storybook/react'

import BasicInformation from './BasicInformation'
import { BasicInformationProps } from './BasicInformation.types'

export default {
  title: 'Coding14/BasicInformation',
  component: BasicInformation,
  argTypes: {},
} as Meta<typeof BasicInformation>

const Template: Story<BasicInformationProps> = (args) => <BasicInformation {...args} />

export const Default = Template.bind({})
Default.args = {
  backgroundColor: '#ffffff',
	fontFamily: 'Consolas',
}