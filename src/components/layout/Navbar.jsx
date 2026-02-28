import { NavLink } from "react-router-dom"
import "../../styles/navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <h2>AZAL INTERNATIONAL</h2>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}