
import MoonComponent from '../components/moonComponent'
import NavBar from '../components/navBar'
import MusicComponent from '../components/musicComponent'
import TourComponent from '../components/tourComponent'
import AboutComponent from '../components/aboutComponent'
import StoreComponent from '../components/storeComponent'

function LandingPage() {
  return (
    <div>
      <MoonComponent/>
      <MusicComponent/>
      <TourComponent/>
      <AboutComponent/>
      <StoreComponent/>
      <NavBar/>
    </div>
  )
}

export default LandingPage