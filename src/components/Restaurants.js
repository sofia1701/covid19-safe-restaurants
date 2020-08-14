import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import "../styles/restaurants.css";
import userContext from "../context/userContext";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const { query } = useContext(userContext);
  const { userData } = useContext(userContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/restaurant")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/restaurant${search}`)
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [search]);

  const handleSaveRestaurant = (restaurantId) => {
    axios
      .post("http://localhost:4000/api/v1/favourite", {
        fbUserId: userData.user._id,
        restaurant: restaurantId,
      })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Property saved in your favourites.");
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const filteredRes = restaurants.filter((restaurant) => {
    return restaurant.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return (
    <div className="restaurants">
      {filteredRes.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
          _id={restaurant._id}
          name={restaurant.name}
          type={restaurant.type}
          description={restaurant.description}
          onDeliveroo={restaurant.onDeliveroo}
          onJustEat={restaurant.onJustEat}
          onUberEats={restaurant.onUberEats}
          isOpen={restaurant.isOpen}
          openingTimes={restaurant.openingTimes}
          eatOutToHelpOut={restaurant.eatOutToHelpOut}
          outdoorSeating={restaurant.outdoorSeating}
          website={restaurant.website}
          instagram={restaurant.instagram}
          phoneNumber={restaurant.phoneNumber}
          picture={restaurant.picture}
          onSaveRestaurant={handleSaveRestaurant}
        />
      ))}
    </div>
  );
}
