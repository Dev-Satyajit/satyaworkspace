import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="nav-logo" to="/satyaworkspace">
        {props.brand}
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
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link1" to="/satyaworkspace">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link1" to="/satyaworkspace">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link1" to="/satyaworkspace">
              About
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control custom me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn"
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              borderRadius: "50%",
            }}
            type="button"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}
