import React from "react";
import { Link } from "react-router-dom";
import { useGames } from "./GameContext";

const Navbar = () => {
  const { user, logoutUser } = useGames()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Game Manager</Link>
      <div className="navbar-nav">
        {user ? (
          <>
            <span className="nav-link">Hello, {user.username}!</span>
            <Link className="nav-link" to="/collection">Collection</Link>
            <button className="nav-link btn btn-link" onClick={logoutUser}>Logout</button>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/collection">Collection</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
