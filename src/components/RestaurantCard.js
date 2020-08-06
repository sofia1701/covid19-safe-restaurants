import React from "react";
import PropTypes from "prop-types";
import { FaInstagram } from "react-icons/fa";
import deliveroo from "../styles/logos/deliveroo.png";
import justEat from "../styles/logos/justEat.png";
import uberEats from "../styles/logos/uberEats.png";

export default function PropertyCard({
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
}) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <h4>{type}</h4>
        <div>
          {isOpen ? (
            <div style={{ color: "green" }}>Open</div>
          ) : (
            <div style={{ color: "red" }}>Temporarly Closed</div>
          )}
        </div>
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          <FaInstagram size={30} />
        </a>

        <div>{phoneNumber}</div>
      </div>
      <div>
        <p>{description}</p>

        <p>{openingTimes}</p>
        <p>{eatOutToHelpOut}</p>
        <div className="icons-list">
          <div>
            {onDeliveroo ? (
              <img className="small-icon" alt="deliveroo" src={deliveroo} />
            ) : null}
          </div>
          <div>
            {onUberEats ? (
              <img className="small-icon" alt="Uber Eats" src={uberEats} />
            ) : null}
          </div>
          <div>
            {onJustEat ? (
              <img className="small-icon-just" alt="Just Eat" src={justEat} />
            ) : null}
          </div>
        </div>
        <div>{outdoorSeating}</div>
        <p>{website}</p>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
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
};
