import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userContext from "../context/userContext";
import FavouriteCard from "./FavouriteCard";
import Alert from "./Alert";
import "../styles/favourites.css";

export default function Favourites() {
  const { userData } = useContext(userContext);

  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (userData.user !== undefined) {
      axios
        .get(
          `http://localhost:4000/api/v1/favourite?query={"fbUserId":"${userData.user.id}"}&populate=restaurant`
        )
        .then((response) => {
          setFavourites(response.data);
          const ratingsArray = [];
          // eslint-disable-next-line
          for (let i = 0; i < response.data.length; i++) {
            ratingsArray.push(response.data[i].rating);
          }
          setRatings(ratingsArray);
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
        setAlert({
          message: "Restaurant removed from favourites.",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="favourites">
      {userData.user ? (
        <h3>
          {`Welcome,
          ${userData.user.displayName}!`}
        </h3>
      ) : null}
      <Alert message={alert.message} success={alert.isSuccess} />

      {userData.user ? (
        <div className="favourite-cards">
          {favourites.map((favourite, index) => (
            <FavouriteCard
              key={favourite._id}
              _id={favourite._id}
              name={favourite.restaurant.name}
              type={favourite.restaurant.type}
              address={favourite.restaurant.streetAddress}
              postcode={favourite.restaurant.postcode}
              phone={favourite.restaurant.phoneNumber}
              picture={favourite.restaurant.picture}
              deleteFavourite={handleDeleteFavourite}
              rating={ratings[index]}
            />
          ))}
        </div>
      ) : (
        <p>Please login to your account.</p>
      )}
    </div>
  );
}
