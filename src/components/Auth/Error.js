import React from "react";
import PropTypes from "prop-types";
import "../../styles/error.css";

export default function Error({ message, clearError }) {
  return (
    <div>
      <div className="error-notice">
        <span>{message}</span>
        <button type="button" onClick={clearError}>
          x
        </button>
      </div>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  clearError: PropTypes.func.isRequired,
};
