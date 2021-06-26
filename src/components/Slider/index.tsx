import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettngs = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettngs
}

const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
