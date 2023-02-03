import React, { FC } from 'react'
import styled from 'styled-components'

import { RadioButtonProps } from './RadioButton.types'
import Label from '../Label/Label'

const StyledRadioButton = styled.input<RadioButtonProps>`
  display: inline-block;
  padding: 9px 30px 11px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const RadioButton: FC<RadioButtonProps> = ({ disabled, backgroundColor, option, ...props }) => {
  return (
    <>
      <StyledRadioButton type='radio' id={option} disabled={disabled} {...props} />
      <Label disabled={disabled} backgroundColor={backgroundColor} text={option} />
    </>
  )
}

export default RadioButton
