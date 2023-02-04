import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import DeveloperSetup from './DeveloperSetup'

describe('Running Test for DeveloperSetup', () => {
  test('DeveloperSetup is rendered', () => {
    render(<DeveloperSetup />)
  })
})
