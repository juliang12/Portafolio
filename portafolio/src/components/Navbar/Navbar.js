import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import TranslateSelect from "../translate/TranslateSelect";
import { useTranslation } from "react-i18next";
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleClick = () => {
    setClick(!click);
  };

  const closeMovileMenu = () => {
    setClick(false);
  };

  const svgVariant = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
              <h1 style={{fontSize: "34px", color: '#5f0261'
}}>JG</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMovileMenu}>
                {t("header.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portafolio"
                className="nav-links"
                onClick={closeMovileMenu}
              >
                {t("header.portafolio")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-links"
                onClick={closeMovileMenu}
              >
                {t("header.contact")}
              </Link>
            </li>
          </ul>
          <div>
            <TranslateSelect />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
