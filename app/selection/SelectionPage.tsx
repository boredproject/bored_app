import React from 'react'
import Navigation from '../homepage/Navigation/Navigation'
import IdeaButton from './component/IdeaButtonSingle/IdeaButton'
import ButtonSelection from './component/ButtonSelection/ButtonSelection'
import WaveFooter from '../homepage/Footer/WaveFooter'

const SelectionPage = () => {
  return (
    <>
        <Navigation />
        <ButtonSelection />
        <WaveFooter />

    </>
  )
}

export default SelectionPage