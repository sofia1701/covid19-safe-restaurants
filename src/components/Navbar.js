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
        Title
      </Link>

      <div className="nav-buttons">
        <Link to="/favourites" className="nav-button">
          Favourites
        </Link>
        {userData.user ? (
          <Link to="/logout" onClick={logout} className="nav-button">
            Log Out
          </Link>
        ) : (
          <>
            <Link to="/login" className="nav-button">
              Sign In
            </Link>
            <Link to="/register" className="nav-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
