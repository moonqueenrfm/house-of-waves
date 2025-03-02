import NavBar from "../components/navBar"
import TourComponent from "../components/tourComponent"
import WaterOverlay from '../components/waterOverlay/WaterOverlay';

function TourPage() {
    return (
      <div id='deck'>
        <WaterOverlay/>
        <TourComponent/>
        <NavBar/>
      </div>
    )
  }
  
  export default TourPage