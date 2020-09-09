import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import Alert from "./Alert";
import "../styles/restaurants.css";
import userContext from "../context/userContext";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(9);

  const { query } = useContext(userContext);
  const { userData } = useContext(userContext);

  useEffect(() => {
    axios
      .get("https://covid-safe-api.herokuapp.com/api/v1/restaurant")
      .then((response) => {
        setRestaurants(response.data);
        setLoad(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
        setLoad(true);
      });
  }, []);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`https://covid-safe-api.herokuapp.com/api/v1/restaurant${search}`)
      .then((response) => {
        setRestaurants(response.data);
        setCurrentPage(1);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [search]);

  const handleSaveRestaurant = (restaurantId) => {
    axios
      .post("https://covid-safe-api.herokuapp.com/api/v1/favourite", {
        fbUserId: userData.user.id,
        restaurant: restaurantId,
        rating: 0,
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleRemoveRestaurant = async (restaurantId) => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `https://covid-safe-api.herokuapp.com/api/v1/favourite/?query={"restaurant":"${restaurantId}"}`,
      });
      // eslint-disable-next-line
      console.log(res);
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );
  const filteredRes = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const restaurantsArray =
    filteredRes.length <= currentRestaurants.length
      ? filteredRes
      : currentRestaurants;

  return (
    <>
      {load ? (
        <div className="restaurants">
          <Alert message={alert.message} success={alert.isSuccess} />
          <div className="restaurants-list">
            {restaurantsArray.map((restaurant) => (
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
                onRemoveRestaurant={handleRemoveRestaurant}
              />
            ))}
          </div>
          {restaurantsArray === currentRestaurants && (
            <Pagination
              restaurantsPerPage={restaurantsPerPage}
              totalRestaurants={restaurants.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      ) : (
        <div className="loading">Loading the restaurants...</div>
      )}
    </>
  );
}
