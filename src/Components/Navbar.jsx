import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLogin }) {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/login">Login</Link>
      <Link className="navbar-link" to="/register">Register</Link>
      {isLogin && <Link className="navbar-link" to="/book">Book room</Link>}
      {isLogin && <Link className="navbar-link" to="/history">History</Link>}
    </div>
  );
}

export default Navbar;
