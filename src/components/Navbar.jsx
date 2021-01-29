import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./LinkedIn-Logo.png";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Style.css";

function Navbar(props) {
  return (
    <Router>
      <div className="navbar_main">
        <div className="container-fluid container ">
          <img className="logo" src={logo}  />
          <ul className="nav_list ">
            <li className="nav_list_home">
              <NavLink className="home_btn" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav_list_login">
              <NavLink className="login_btn" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
