import NavBar from "../components/navBar"
import StoreComponent from "../components/storeComponent"
import WaterOverlay from '../components/waterOverlay/WaterOverlay';

function StorePage() {
    return (
      <div id='deck'>
        <WaterOverlay/>
        <StoreComponent/>
        <NavBar/>
      </div>
    )
  }
  
  export default StorePage