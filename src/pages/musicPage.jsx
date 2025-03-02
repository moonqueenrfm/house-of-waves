import NavBar from "../components/navBar"
import MusicComponent from '../components/musicComponent'
import WaterOverlay from '../components/waterOverlay/WaterOverlay';

function MusicPage() {
  return (
    <div id='deck'>
      <WaterOverlay/>
      <MusicComponent/>
      <NavBar/>
    </div>
  )
}
  
export default MusicPage