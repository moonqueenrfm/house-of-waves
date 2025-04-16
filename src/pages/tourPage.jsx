import NavBar from "../components/navBar"
import TourComponent from "../components/tourComponent"
import WaterOverlay from '../components/waterOverlay/WaterOverlay';

function TourPage() {
  const supabaseUrl = 'https://trlauvtqyqikookhwwzs.supabase.co/storage/v1/object/public/posters//';
    return (
      <div id='deck'>
        <WaterOverlay/>
        <cards>
          <TourComponent/>
          <img 
          src={supabaseUrl+'botb2024.jpg'}
          alt="Battle of the bands poster"/>
        </cards>
        <NavBar/>
      </div>
    )
  }
  
  export default TourPage