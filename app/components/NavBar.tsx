import { Link } from "react-router"

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
        <p className='text-2xl font-bold text-gradient'>RESUMIND</p>
        
        </Link>
    </nav>
  )
}

export default NavBar