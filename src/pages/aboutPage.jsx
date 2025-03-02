import NavBar from "../components/navBar"
import AboutComponent from "../components/aboutComponent"
import WaterOverlay from '../components/waterOverlay/WaterOverlay';

function AboutPage() {
    return (
      <div id='deck'>
        <WaterOverlay/>
        <AboutComponent/>
        <NavBar/>
      </div>
    )
  }
  
  export default AboutPage