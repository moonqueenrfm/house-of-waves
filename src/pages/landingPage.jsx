import MoonComponent from '../components/moonComponent'
import NavBar from '../components/navBar'
import MissedConnectionsImage from '../images/Missed_Quonnections.jpg'

function LandingPage() {
  return (
    <div>
      <MoonComponent/>
      <img 
        src={MissedConnectionsImage}
        width={500}
        height={500}
        alt="Picture of the author"/>
        <h1>Missed Quonnections</h1>
        <NavBar/>
    </div>
  )
}

export default LandingPage