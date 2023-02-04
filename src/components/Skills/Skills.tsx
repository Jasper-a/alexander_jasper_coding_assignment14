import React, { FC } from 'react'
import styled from 'styled-components'

import { SkillsProps } from './Skills.types'

const StyledSkills = styled.div<SkillsProps>`
  font-family: ${(props) => props.fontFamily}, Comic Sans MS;
  background-color: ${(props) => props.backgroundColor};
`

const Skills: FC<SkillsProps> = ({ backgroundColor, fontFamily, ...props }) => {
  return (
    <StyledSkills
      backgroundColor={backgroundColor}
			fontFamily={fontFamily}
      {...props}
    >
      <h2>Skills</h2>
      <p>Effecient in using these tools:</p>
      <ul>
        <li>XAMPP</li>
        <li>Git/GitHub</li>
        <li>Oracle VM</li>
        <li>Oracle SQL</li>
        <li>WinSCP</li>
        <li>PuTTY</li>
        <li>Jupyter</li>
        <li>AWS CLI</li>
        <li>Linux Console</li>
      </ul>
      <p>Proficient in these languages:</p>
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Ruby</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node</li>
      </ul>
    </StyledSkills>
  )
}

export default Skills

