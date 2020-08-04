import React from "react";
import PropTypes from "prop-types";
import "../../styles/error.css";

export default function Error({ message }) {
  return (
    <div>
      <div className="error-notice">
        <span>{message}</span>
      </div>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
