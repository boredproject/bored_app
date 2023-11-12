import WaveFooter from "./MainPage/Footer/WaveFooter"
import Navigation from "./MainPage/Navigation";
import CtaMainpage from "./MainPage/CTA/CtaMainpage";
import SoundEffects from "./SFX/SoundEffects";
import Loader from "./MainPage/Loader";


const Home = () => {
  return (
    <>
      <Navigation />
      <CtaMainpage />
      <WaveFooter />
      <SoundEffects />
      <Loader />
    </>
  )
}

export default Home