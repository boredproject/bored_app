import React from 'react'
import WaveFooter from "./Footer/WaveFooter";
import Navigation from "./Navigation/Navigation";
import CtaMainpage from "./CTA/CtaMainpage";
import SoundEffects from "../SFX/SoundEffects";
import Loader from "./Loader/Loader";

const MainPage = () => {
  return (
    <div>
        <WaveFooter />
        <Loader />
        <Navigation />
        <CtaMainpage />
        <SoundEffects />
    </div>
  )
}

export default MainPage