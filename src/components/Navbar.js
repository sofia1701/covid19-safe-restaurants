import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { userData, setUserData } = useContext(userContext);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav>
      <Link to="/" className="title">
        <p>Title</p>
      </Link>
      <Link to="/favourites" className="nav-item">
        Favourites
      </Link>
      <div className="auth-buttons">
        {userData.user ? (
          <Link to="/logout" onClick={logout} className="nav-item-button">
            Log Out
          </Link>
        ) : (
          <>
            <Link to="/login" className="nav-item-button">
              SignIn
            </Link>
            <Link to="/register" className="nav-item-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
