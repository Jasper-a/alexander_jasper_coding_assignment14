import React, { FC } from 'react'
import styled from 'styled-components'

import { ResourcesProps } from './Resources.types'

import iconEmail from './assets/email.png'
import iconPhone from './assets/phone.png'
import iconLinkedIn from './assets/linkedin.png'

const StyledResources = styled.div<ResourcesProps>`
  font-family: ${(props) => props.fontFamily}, Comic Sans MS;
  background-color: ${(props) => props.backgroundColor};
`

const Resources: FC<ResourcesProps> = ({ backgroundColor, fontFamily, ...props }) => {
  return (
    <StyledResources
      backgroundColor={backgroundColor}
			fontFamily={fontFamily}
      {...props}
    >
      <h2>Resources</h2>
      <ul style={{'list-style': 'none'}}>
        <li><img src={iconEmail} /> Email: <a href='mailto:jasperalexander@icloud.com'>jasperalexander@icloud.com</a></li>
        <li><img src={iconPhone} /> Phone: <a href='tel:204-898-8622'>204-898-8622</a></li>
        <li><img src={iconLinkedIn} /> LinkedIn: <a href='https://www.linkedin.com/in/jasper-a/'>jasper-a</a></li>
      </ul>
    </StyledResources>
  )
}

export default Resources
