
import { Link } from "react-router-dom";
import { SplashContainer } from "./splashElements";
import MissedConnectionsImage from '../../images/Missed_Quonnections.jpg'

function splashComponent() {
  return(
    <SplashContainer>
      <img 
        src={MissedConnectionsImage}
        alt="Picture of the author"/>
      <h2>Missed Quonnections</h2>
    </SplashContainer>
  )
}

export default splashComponent