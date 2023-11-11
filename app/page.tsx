import WaveFooter from "./MainPage/Footer/WaveFooter"
import NavAndMute from "./MainPage/NavAndMute";
import CtaMainpage from "./MainPage/CTA/CtaMainpage";
import SoundEffects from "./SFX/SoundEffects";
import Loader from "./MainPage/Loader";


const Home = () => {
  return (
    <>
      <NavAndMute />
      <CtaMainpage />
      <WaveFooter />
      <SoundEffects />
      <Loader />
    </>
  )
}

export default Home