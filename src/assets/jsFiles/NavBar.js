import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import '../cssFiles/NavBar.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo nav-change-color">
            <div className="logo-and-icon">
                <p>CONF<span>RE</span></p> <SportsHandballIcon style={{ fontSize: 40 }} className="nav-iconn"/>
            </div>
          </NavLink>

          <div className="logo_menu_space"></div>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sports"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/locations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Locations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sponsors"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sponsors
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
