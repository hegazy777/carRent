import React from 'react';
import logo from "../../assets/imgs/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Become a renter
            </a>
            <a className="nav-link" href="#">
              Rental deals
            </a>
            <a className="nav-link" href="#">
              How it works
            </a>
            <a className="nav-link disabled" aria-disabled="true">
              Why choose us
            </a>
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2" type="button">
              Sign In
            </button>
            <button className="btn btn-primary" type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
