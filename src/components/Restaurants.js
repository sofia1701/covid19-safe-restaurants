import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import "../styles/restaurants.css";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/restaurant")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="restaurants">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
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
        />
      ))}
    </div>
  );
}
