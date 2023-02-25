import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">NewsMonky</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" to="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}
