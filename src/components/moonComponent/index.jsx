import SundayMoon from '../../images/sundaymoon.png'
import { Link } from "react-router-dom";

function MoonComponent() {
  return(
    <Link to="/lyrics">
    <img 
        src={SundayMoon}
        width={200}
        height={200}
        alt="Picture of the Moon"/>
    </Link>
  )
}

export default MoonComponent