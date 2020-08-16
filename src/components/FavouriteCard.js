import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

export default function FavouriteCard({
  name,
  type,
  picture,
  deleteFavourite,
  _id,
}) {
  return (
    <div className="favourite-card">
      <div>
        <img className="favourite-picture" src={picture} alt="restaurant" />
      </div>
      <div className="favourite-header">
        <h3>{name}</h3>
        <h4>{type}</h4>
      </div>
      <div>
        <h4>Address: 1 Example, M0 0AA</h4>
        <h4>Rating:</h4>
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
