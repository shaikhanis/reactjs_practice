import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Amish Patel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="passing">
                  Passing Objects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="input">
                  Input
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="slider">
                  Image SlideShow
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="nothing">
                  Nothing Here
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
