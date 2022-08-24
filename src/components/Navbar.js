import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({mode}) => {
    const navigate = useNavigate()
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to='/loggedin'>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page"  to='/userdata'>
                UserData
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary" onClick={() => navigate('/')}>logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
