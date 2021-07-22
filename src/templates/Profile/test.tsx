//import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Profile>
        <h1>Profile</h1>
      </Profile>
    )
  })
})
