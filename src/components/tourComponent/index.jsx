import BOTB from '../../images/BOTB_Poster.jpg';
import { TourContainer } from "./tourElements";

function TourComponent(){
    return(
        <TourContainer>
        <img 
          src={BOTB}
          alt="Battle of the bands poster"/>
        </TourContainer>
    )
}
export default TourComponent