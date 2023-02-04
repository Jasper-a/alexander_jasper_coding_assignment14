import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import BasicInformation from './BasicInformation'

describe('Running Test for BasicInformation', () => {
  test('BasicInformation is rendered', () => {
    render(<BasicInformation />)
  })
})
