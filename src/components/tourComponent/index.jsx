import BOTB from '../../images/BOTB_Poster.jpg';
import { TourContainer } from "./tourElements";

function TourComponent(){
    return(
        <TourContainer>
        <img 
          src={BOTB}
          alt="Battle of the bands poster"
          width="500px"/>
        </TourContainer>
    )
}
export default TourComponent