import React, { FC } from 'react'
import styled from 'styled-components'

import { DeveloperSetupProps } from './DeveloperSetup.types'

const StyledDeveloperSetup = styled.div<DeveloperSetupProps>`
  font-family: ${(props) => props.fontFamily}, Comic Sans MS;
  background-color: ${(props) => props.backgroundColor};
`

const DeveloperSetup: FC<DeveloperSetupProps> = ({ backgroundColor, fontFamily, ...props }) => {
  return (
    <StyledDeveloperSetup
      backgroundColor={backgroundColor}
			fontFamily={fontFamily}
      {...props}
    >
      <h2>Developer Setup</h2>
      <ul>
        <li>Windows laptop, single monitor.</li>
        <li>Not regularily using Visual Studios (not enough for a defined setup preference).</li>
        <li>Sublime Text all text viewing and editing.</li>
        <li>Consolas font for everything, but my favourite is Comic Sans MS.</li>
      </ul>
    </StyledDeveloperSetup>
  )
}

export default DeveloperSetup
