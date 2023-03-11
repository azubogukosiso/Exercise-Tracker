import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mt-4 rounded-3">
      <div className="d-flex flex-column flex-lg-row container-fluid justify-content-center">
        <NavLink className="navbar-brand" to="/">
          Exercise Tracker
        </NavLink>

        <div id="navbarSupportedContent">
          <ul className="navbar-nav d-flex justify-content-center align-items-center me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Exercises
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Exercise
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                Create User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
