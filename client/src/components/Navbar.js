import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import resume_logo from "../img/resume_logo.png";
const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(dispatch);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item  ms-2  active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/resume">
              Resumes
            </NavLink>
          </li>

          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>

          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item ms-2  active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/resume">
              Resumes
            </NavLink>
          </li>

          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/signup">
              Registration
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <div className="img_div">
              <img src={resume_logo} alt="filter applied" />
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse me-5 navbar-collapse"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
