import { NavLink } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={"link"}>Home</NavLink>
            <NavLink to="/about" className={"link"}>About</NavLink>
        </nav>
    )
}

export default Nav;