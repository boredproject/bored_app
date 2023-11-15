import WaveFooter from "./Footer/WaveFooter";
import Navigation from "./Navigation/Navigation";
import CtaMainpage from "./CTA/CtaMainpage";
import SoundEffects from "../SFX/SoundEffects";
import DropdownMenuProfile from "@/app/homepage/Navigation/Dropdown/DropdownMenu";
import Loader from "./Loader/Loader";

const HomePage = () => {
  return (
    <div>
        <WaveFooter />
        <Loader />
        <Navigation />
        <DropdownMenuProfile />
        <CtaMainpage />
        <SoundEffects />
    </div>
  )
}

export default HomePage;