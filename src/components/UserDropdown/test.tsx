// import { render, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the heading', () => {
    renderWithTheme(<UserDropdown username="Diego" />)
  })
})
