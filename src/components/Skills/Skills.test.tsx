import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Skills from './Skills'

describe('Running Test for Skills', () => {
  test('Skills is rendered', () => {
    render(<Skills />)
  })
})
