
import MoonComponent from '../components/moonComponent'
import SplashComponent from '../components/splashComponent'
import NavBar from '../components/navBar'
import MusicComponent from '../components/musicComponent'
import TourComponent from '../components/tourComponent'
import AboutComponent from '../components/aboutComponent'
import StoreComponent from '../components/storeComponent'
import WaterOverlay from '../components/waterOverlay/WaterOverlay';

function LandingPage() {
  return (
    <div id='deck'>
      <WaterOverlay/>
      <cards class='hideScroll'>
        <MoonComponent/>
        <SplashComponent/>
        <MusicComponent/>
        <TourComponent/>
        <AboutComponent/>
        <StoreComponent/>
      </cards>
      <NavBar/>
    </div> )
}

export default LandingPage