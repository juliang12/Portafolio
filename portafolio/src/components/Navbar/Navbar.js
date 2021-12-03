import React, {useState} from 'react'
import "../Navbar/Navbar.css"
import {Link} from 'react-router-dom'
import Logo from "../../images/logo_white_large.png"

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = ()=>{
        setClick(!click)
    }

    const closeMovileMenu = ()=>{
        setClick(false)
    }
    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo">
                <img className="logo" src={Logo} alt="" />
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                      <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                  </div>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                      <li className="nav-item">
                          <Link to="/" className="nav-links" onClick={closeMovileMenu}>
                              Home
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/portafolio" className="nav-links" onClick={closeMovileMenu}>
                              Portafolio
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contacto" className="nav-links" onClick={closeMovileMenu}>
                              Contacto
                          </Link>
                      </li>
                  </ul>
              </div>
              </nav>  
        </>
    )
}

export default Navbar
