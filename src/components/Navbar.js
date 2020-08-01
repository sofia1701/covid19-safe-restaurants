import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">
        <p>Title</p>
      </Link>
      <Link to="/favourites" className="nav-item">
        Favourites
      </Link>
      <Link to="/login" className="nav-item">
        Login
      </Link>
    </nav>
  );
}
