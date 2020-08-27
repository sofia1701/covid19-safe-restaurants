import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "../styles/star-rating.css";
import axios from "axios";

const StarRating = ({ id, databaseRating }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                axios.patch(`http://localhost:4000/api/v1/favourite/${id}`, {
                  rating: ratingValue,
                });
              }}
            />
            {!databaseRating && (
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#A8A8A8"}
                size={15}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            )}
            {databaseRating && !rating && (
              <FaStar
                className="star"
                color={
                  ratingValue <= (hover || databaseRating)
                    ? "#ffc107"
                    : "#A8A8A8"
                }
                size={15}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            )}
            {databaseRating && rating && databaseRating !== rating && (
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#A8A8A8"}
                size={15}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
