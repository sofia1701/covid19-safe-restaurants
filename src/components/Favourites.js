import React, { useContext } from "react";
import userContext from "../context/userContext";
import "../styles/favourites.css";

export default function Favourites() {
  const { userData } = useContext(userContext);

  return (
    <div className="favourites">
      {userData.user ? (
        <p>you can access your favourites</p>
      ) : (
        <p>Please login to your account</p>
      )}
    </div>
  );
}
