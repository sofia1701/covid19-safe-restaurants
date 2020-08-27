import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import {
  FaInstagram,
  FaCheck,
  FaTimes,
  FaPhone,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getSaved from "../requests/getSaved";
import userContext from "../context/userContext";
// eslint-disable-next-line
const faHeartReg = require("@fortawesome/free-regular-svg-icons/faHeart");

export default function RestaurantCard({
  _id,
  name,
  type,
  description,
  onDeliveroo,
  onJustEat,
  onUberEats,
  isOpen,
  openingTimes,
  eatOutToHelpOut,
  outdoorSeating,
  website,
  instagram,
  phoneNumber,
  picture,
  onSaveRestaurant,
  onRemoveRestaurant,
}) {
  const [flip, setFlip] = useState(false);
  const [saved, setSaved] = useState(false);

  const { userData } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSaved(userData.user.id);

        if (response.status === 200) {
          const isSaved = response.data.some(
            (restaurant) => _id === restaurant.restaurant._id
          );

          if (isSaved) {
            setSaved(true);
          }
        }
      } catch (err) {
        // eslint-disable-next-line
        console.log(err);
      }
    };

    fetchData();
  }, [_id, userData.user.id]);

  return (
    <div className="card">
      {flip ? (
        <figure className="card-description">
          <h4>{type}</h4>
          <p>{description}</p>
          <h4>Hours</h4>
          <p>{openingTimes}</p>
          <div>
            {eatOutToHelpOut ? (
              <div>
                <h4>Eat Out to Help Out</h4>
                {eatOutToHelpOut}
              </div>
            ) : (
              <div>
                <h4>Eat Out to Help Out</h4>
                <p>Not Available</p>
              </div>
            )}
          </div>
          <div>
            <h4>Contact</h4>
            <div className="contact-icons">
              {phoneNumber ? (
                <i title={phoneNumber} className="text-link">
                  <FaPhone size={25} />
                </i>
              ) : null}

              <a
                href={website}
                title="Website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <FaGlobe size={30} />
              </a>
              <a
                href={instagram}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

          <button
            className="details-button"
            type="button"
            onClick={() => setFlip(!flip)}
          >
            Back
          </button>
        </figure>
      ) : (
        <figure className="card-header">
          <h3>{name}</h3>
          <img className="picture" src={picture} alt="restaurant" />
          <div>
            {isOpen ? (
              <div style={{ color: "green" }}>Open</div>
            ) : (
              <div style={{ color: "red" }}>Temporarily Closed</div>
            )}
          </div>
          <div>
            {outdoorSeating ? (
              <div>Outdoor seating: Available</div>
            ) : (
              <div>Outdoor seating: Not available</div>
            )}
          </div>
          <div className="delivery">
            {onDeliveroo ? (
              <div className="delivery-list">
                Deliveroo:
                <FaCheck />
              </div>
            ) : (
              <div className="delivery-list">
                Deliveroo:
                <FaTimes />
              </div>
            )}

            {onUberEats ? (
              <div className="delivery-list">
                Uber Eats:
                <FaCheck />
              </div>
            ) : (
              <div className="delivery-list">
                Uber Eats:
                <FaTimes />
              </div>
            )}

            {onJustEat ? (
              <div className="delivery-list">
                Just Eat:
                <FaCheck />
              </div>
            ) : (
              <div className="delivery-list">
                Just Eat:
                <FaTimes />
              </div>
            )}
          </div>

          {/*
          {userData.user ? (
            <button
              type="button"
              className="save-button"
              onClick={() => onSaveRestaurant(_id)}
            >
              <FaHeart size={22} />
            </button>
          ) : null}
          */}

          {userData.user && !saved && (
            // eslint-disable-next-line
            <a
              className="save-button"
              href="#"
              onClick={() => {
                onSaveRestaurant(_id);
                setSaved(true);
              }}
            >
              <FontAwesomeIcon
                className="save-button"
                icon={faHeartReg.faHeart}
              />
            </a>
          )}

          {userData.user && saved && (
            // eslint-disable-next-line
            <a
              className="save-button"
              href="#"
              onClick={() => {
                onRemoveRestaurant(_id);
                setSaved(false);
              }}
            >
              <FaHeart size={22} />
            </a>
          )}

          <button
            className="details-button"
            type="button"
            onClick={() => setFlip(!flip)}
          >
            More
          </button>
        </figure>
      )}
    </div>
  );
}

RestaurantCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDeliveroo: PropTypes.bool.isRequired,
  onJustEat: PropTypes.bool.isRequired,
  onUberEats: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openingTimes: PropTypes.string.isRequired,
  eatOutToHelpOut: PropTypes.string.isRequired,
  outdoorSeating: PropTypes.bool.isRequired,
  website: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onSaveRestaurant: PropTypes.func.isRequired,
  onRemoveRestaurant: PropTypes.func.isRequired,
};
