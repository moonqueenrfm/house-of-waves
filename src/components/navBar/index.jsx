import { Link } from "react-router-dom";

function NavBar () {
  return(
    <ul>
      <Link className={'navlink'} to="/">Home</Link>
      <Link className={'navlink'} to="/music">Music</Link>
      <Link className={'navlink'} to="/tour">Tour</Link>
      <Link className={'navlink'} to="/about">About</Link>
      <Link className={'navlink'} to="/about">Store</Link>
    </ul>
  )
}

export default NavBar