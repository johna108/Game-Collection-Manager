import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Game Manager</a>&nbsp;&nbsp;&nbsp;
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/collection">Games</NavLink>&nbsp;&nbsp;&nbsp;
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Mycollection">My Collection</NavLink>&nbsp;&nbsp;&nbsp;
              </li>
            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto">
                <li class="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>&nbsp;&nbsp;&nbsp;
                  </li>

                  <li class="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>&nbsp;&nbsp;&nbsp;
                  </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <br/>
      </div>
    )
  }
}
