import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/star-rating.css";
import axios from "axios";
import PropTypes from "prop-types";

const StarRating = ({ id, databaseRating }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          // eslint-disable-next-line
          <label className="label" key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                axios.patch(
                  `https://covid-safe-api.herokuapp.com/api/v1/favourite/${id}`,
                  {
                    rating: ratingValue,
                  }
                );
              }}
            />
            <FaStar
              className="star"
              color={
                // eslint-disable-next-line
                !databaseRating ||
                (databaseRating && rating && databaseRating !== rating)
                  ? ratingValue <= (hover || rating)
                    ? "#ffc107"
                    : "#A8A8A8"
                  : ratingValue <= (hover || databaseRating)
                  ? "#ffc107"
                  : "#A8A8A8"
              }
              size={15}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  id: PropTypes.string.isRequired,
  databaseRating: PropTypes.number,
};

StarRating.defaultProps = {
  databaseRating: 0,
};

export default StarRating;
