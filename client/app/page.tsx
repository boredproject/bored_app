import WaveFooter from "./MainPage/Footer/WaveFooter";
import Navigation from "./MainPage/Navigation";
import CtaMainpage from "./MainPage/CTA/CtaMainpage";
import SoundEffects from "./SFX/SoundEffects";
import Loader from "./MainPage/Loader";
import AuthModal from "./MainPage/AuthModal";
import AuthModalProvider from "./Contexts/AuthModalProvider";

const Home = () => {
  return (
    <>
      <AuthModalProvider>
        <AuthModal />
        <Navigation />
        <CtaMainpage />
        <WaveFooter />
        <SoundEffects />
        <Loader />
      </AuthModalProvider>
    </>
  );
};

export default Home;
