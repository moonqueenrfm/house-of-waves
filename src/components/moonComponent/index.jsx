
import { Link } from "react-router-dom";

import { MoonContainer } from "./moonElements";

import SundayMoon from '../../images/sundaymoon.png'
import MissedConnectionsImage from '../../images/Missed_Quonnections.jpg'

function MoonComponent() {
  return(
    <MoonContainer>
      <Link to="/lyrics">
        <img 
          src={SundayMoon}
          width={200}
          height={200}
          alt="Picture of the Moon"/>
      </Link>
      <img 
        src={MissedConnectionsImage}
        width={500}
        height={500}
        alt="Picture of the author"/>
      <h1>Missed Quonnections</h1>
    </MoonContainer>
    
  )
}

export default MoonComponent