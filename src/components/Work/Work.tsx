import React, { FC } from 'react'
import styled from 'styled-components'

import { WorkProps } from './Work.types'

import iconDollar from './assets/dollar.png'
import iconRRC from './assets/rrc.png'

const StyledWork = styled.div<WorkProps>`
  font-family: ${(props) => props.fontFamily}, Comic Sans MS;
  background-color: ${(props) => props.backgroundColor};
`

const Work: FC<WorkProps> = ({ backgroundColor, fontFamily, ...props }) => {
  return (
    <StyledWork
      backgroundColor={backgroundColor}
			fontFamily={fontFamily}
      {...props}
    >
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>Payroll Accountant</h3>
          <img src={iconDollar} style={{'float': 'left', 'padding-right': '16px'}}/>
          <p><i>2021 - present</i></p>
          <p>Worked with family managed care as an accountant doing pay checks and semi-annual/annual audits.</p>
        </li>
        <li>
          <h3><a href='https://www.rrc.ca/explore/program/full-stack-web-development/?program-type=part-time-program'>College: Full Stack Web Development</a></h3>
          <img src={iconRRC} style={{'float': 'left', 'padding-right': '16px'}}/>
          <p><i>2021 September - 2023 August</i></p>
          <p>Learning at Red River College all aspects of web development and app stacks.</p>
        </li>
      </ul>
    </StyledWork>
  )
}

export default Work
