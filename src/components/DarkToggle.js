import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext'
import MoonLight from './icons/moon-light.svg'
import MoonDark from './icons/moon-dark.svg'

const DarkModeButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 8px 10px;
  font-weight: 700;
  margin: 10px 0;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  &:focus {
    outline: none;
  }
`

const DarkToggle = ({ isExpanded = false }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  const toggleMode = () =>
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  const oppositeColor = colorMode === 'light' ? 'dark' : 'light'

  return (
    <DarkModeButton
      onClick={toggleMode}
      aria-label={`Activate ${oppositeColor} mode`}
    >
      {colorMode === 'dark' ? (
        <img src={MoonDark} alt="sun logo" />
      ) : (
        <img src={MoonLight} alt="moon Logo" />
      )}
    </DarkModeButton>
  )
}

export default DarkToggle
