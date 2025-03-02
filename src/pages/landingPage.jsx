
import MoonComponent from '../components/moonComponent'
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
        <MusicComponent/>
        <TourComponent/>
        <AboutComponent/>
        <StoreComponent/>
      </cards>
      <NavBar/>
    </div> )
}

export default LandingPage