import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userContext from "../context/userContext";
import FavouriteCard from "./FavouriteCard";
import "../styles/favourites.css";

export default function Favourites() {
  const { userData } = useContext(userContext);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/favourite?populate=restaurant")
      .then((response) => {
        setFavourites(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <div className="favourites">
      {userData.user ? (
        <div className="favourite-cards">
          {favourites.map((favourite) => (
            <div className="favourite-card" key={favourite._id}>
              <FavouriteCard
                _id={favourite.restaurant._id}
                name={favourite.restaurant.name}
                type={favourite.restaurant.type}
                isOpen={favourite.restaurant.isOpen}
                picture={favourite.restaurant.picture}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Please login to your account.</p>
      )}
    </div>
  );
}
