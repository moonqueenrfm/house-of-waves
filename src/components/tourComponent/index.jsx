import BOTB from '../../images/BOTB_Poster.jpg';
import { TourContainer } from "./tourElements";

function TourComponent(){
  const supabaseUrl = 'https://trlauvtqyqikookhwwzs.supabase.co/storage/v1/object/public/posters//';
    return(
        <TourContainer>
          <img
          src={supabaseUrl+'krux.jpg'}
          alt='Krux poster'/>
        </TourContainer>
    )
}
export default TourComponent