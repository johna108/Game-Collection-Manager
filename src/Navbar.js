import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Game Manager</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
        <Link className="nav-link" to="/collection">Collection</Link>
      </div>
    </nav>
  );
};

export default Navbar;
