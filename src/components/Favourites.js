import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userContext from "../context/userContext";
import FavouriteCard from "./FavouriteCard";
import "../styles/favourites.css";

export default function Favourites() {
  const { userData } = useContext(userContext);

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (userData.user !== undefined) {
      axios
        .get(
          `http://localhost:4000/api/v1/favourite?query={"fbUserId":"${userData.user.id}"}&populate=restaurant`
        )
        .then((response) => {
          setFavourites(response.data);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }, [userData]);

  const handleDeleteFavourite = (_id) => {
    axios
      .delete(`http://localhost:4000/api/v1/favourite/${_id}`)
      .then(() => setFavourites(favourites.filter((fav) => fav._id !== _id)))
      .then(() => {
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="favourites">
      {userData.user ? (
        <h3>
          Welcome,
          {userData.user.displayName}
        </h3>
      ) : null}
      {userData.user ? (
        favourites.map((favourite) => (
          <FavouriteCard
            key={favourite._id}
            _id={favourite._id}
            name={favourite.restaurant.name}
            type={favourite.restaurant.type}
            picture={favourite.restaurant.picture}
            deleteFavourite={handleDeleteFavourite}
          />
        ))
      ) : (
        <p>Please login to your account.</p>
      )}
    </div>
  );
}
