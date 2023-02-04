import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Work from './Work'

describe('Running Test for Work', () => {
  test('Work is rendered', () => {
    render(<Work />)
  })
})
