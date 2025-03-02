
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
          alt="Picture of the Moon"
          width={"250px"}
          style={{marginBottom:"-25px"}}/>
      </Link>
      <h1>MoonQueen</h1>
    </MoonContainer>
  )
}

export default MoonComponent