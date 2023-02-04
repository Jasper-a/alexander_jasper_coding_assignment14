import React, { FC } from 'react'
import styled from 'styled-components'

import { BasicInformationProps } from './BasicInformation.types'

const StyledBasicInformation = styled.div<BasicInformationProps>`
  font-family: ${(props) => props.fontFamily}, Comic Sans MS;
  background-color: ${(props) => props.backgroundColor};
`

const BasicInformation: FC<BasicInformationProps> = ({ backgroundColor, fontFamily, ...props }) => {
  return (
    <StyledBasicInformation
      backgroundColor={backgroundColor}
			fontFamily={fontFamily}
      {...props}
    >
      <h1>Jasper Alexander</h1>
      <h3>Junior Web Developer</h3>
    </StyledBasicInformation>
  )
}

export default BasicInformation
