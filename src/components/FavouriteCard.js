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
  rating,
}) {
  return (
    <div className="favourite-card">
      <img className="favourite-picture" src={picture} alt="restaurant" />

      <div className="favourite-header">
        <h4>{name}</h4>
        <h5>{type}</h5>
      </div>

      <div>
        <h5>{`Address: ${address}, ${postcode}`}</h5>
        <h5>{`Contact: ${phone}`}</h5>
      </div>
      <div className="rating">
        <h5>Rating</h5>
        <StarRating id={_id} databaseRating={rating} />
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
