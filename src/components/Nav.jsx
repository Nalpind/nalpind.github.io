import { NavLink } from 'react-router-dom'
import "./Nav.css"
import Logo from '../assets/logoIcon.jsx'

function Nav() {
    return (
        <nav className="navbar">
            <Logo fillColor="blue" width="40px" height="40px"/>
            <NavLink to="/" className={"link"}>Home</NavLink>
            <NavLink to="/about" className={"link"}>About</NavLink>
        </nav>
    )
}

export default Nav;