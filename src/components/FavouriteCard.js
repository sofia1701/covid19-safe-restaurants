import React from "react";
import PropTypes from "prop-types";

export default function FavouriteCard({ name, type, isOpen, picture }) {
  return (
    <div>
      <h3>{name}</h3>
      <img className="picture" src={picture} alt="restaurant" />
      <h4>{type}</h4>
      <div>
        {isOpen ? (
          <div style={{ color: "green" }}>Open</div>
        ) : (
          <div style={{ color: "red" }}>Temporarly Closed</div>
        )}
      </div>
    </div>
  );
}

FavouriteCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
};
