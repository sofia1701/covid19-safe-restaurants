import React from "react";
import PropTypes from "prop-types";

export default function FavouriteCard({ name, type, picture }) {
  return (
    <>
      <div>
        <img className="favourite-picture" src={picture} alt="restaurant" />
      </div>
      <div className="favourite-header">
        <h3>{name}</h3>
        <h4>{type}</h4>
      </div>
      <div>
        <h4>Address:</h4>
        <h4>Rating:</h4>
      </div>
    </>
  );
}

FavouriteCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
