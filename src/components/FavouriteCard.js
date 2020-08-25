import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import StarRating from "./StarRating";

export default function FavouriteCard({
  name,
  type,
  picture,
  address,
  postcode,
  phone,
  deleteFavourite,
  _id,
}) {
  return (
    <div className="favourite-card">
      <img className="favourite-picture" src={picture} alt="restaurant" />

      <div className="favourite-header">
        <h4>{name}</h4>
        <h5>{type}</h5>
      </div>
<<<<<<< HEAD
      <div className="address">
        <h5>Address: 1 Example, M0 0AA</h5>
        <h5>Contact: 000000000</h5>
=======
      <div>
        <h5>{`Address: ${address}, ${postcode}`}</h5>
        <h5>{`Contact: ${phone}`}</h5>
>>>>>>> 0fac22e291889278f47c5d13fee5affba36379f7
      </div>
      <div className="rating">
        <h5>Rating</h5>
        <StarRating />
      </div>
      <button
        onClick={() => deleteFavourite(_id)}
        className="delete-button"
        type="button"
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}

FavouriteCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};
