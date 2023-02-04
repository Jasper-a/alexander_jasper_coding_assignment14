import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Resources from './Resources'

describe('Running Test for Resources', () => {
  test('Resources is rendered', () => {
    render(<Resources />)
  })
})
