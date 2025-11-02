import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLogin }) {
  return (
    <div className="navbar">
      {!isLogin && (
        <>
          <Link className="navbar-link" to="/">
            Login
          </Link>
          <Link className="navbar-link" to="/shainaregister">
            Register
          </Link>
        </>
      )}

      {isLogin && (
        <>
          <Link className="navbar-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="navbar-link" to="/bookroom">
            Bookroom
          </Link>
          <Link className="navbar-link" to="/history">
            History
          </Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
