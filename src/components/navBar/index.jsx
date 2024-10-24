import { Link } from "react-router-dom";
import { NavBarListContainer } from "./navBarElements";

function NavBar () {
  return(
    <NavBarListContainer>
      <Link className={'navlink'} to="/">Home</Link>
      <Link className={'navlink'} to="/music">Music</Link>
      <Link className={'navlink'} to="/tour">Tour</Link>
      <Link className={'navlink'} to="/about">About</Link>
      <Link className={'navlink'} to="/about">Store</Link>
    </NavBarListContainer>
  )
}

export default NavBar