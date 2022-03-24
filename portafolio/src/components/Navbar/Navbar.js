import React, {useState} from 'react'
import "../Navbar/Navbar.css"
import {Link} from 'react-router-dom'
import Logo from "../../images/logo_white_large.png"
import TranslateSelect from '../translate/TranslateSelect'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [t, i18n] = useTranslation("global")

    const handleClick = ()=>{
        setClick(!click)
    }

    const closeMovileMenu = ()=>{
        setClick(false)
    };
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
                              {t("header.home")}
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/portafolio" className="nav-links" onClick={closeMovileMenu}>
                          {t("header.portafolio")}
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contacto" className="nav-links" onClick={closeMovileMenu}>
                          {t("header.contact")}
                          </Link>
                      </li>
                  </ul>
                  <div>
                  <TranslateSelect/>
                  </div>
              </div>
              </nav>  
        </>
    )
}

export default Navbar
