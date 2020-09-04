import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  restaurantsPerPage,
  totalRestaurants,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination-list">
        {currentPage !== 1 && (
          <li className="page-item">
            <a
              className="page-link"
              href="#!"
              onClick={() => {
                paginate(currentPage - 1);
              }}
            >
              {"<-"}
            </a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                paginate(number);
                console.log(currentPage);
              }}
              href="#!"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        {currentPage !== pageNumbers[pageNumbers.length - 1] && (
          <li className="page-item">
            <a
              className="page-link"
              href="#!"
              onClick={() => {
                paginate(currentPage + 1);
              }}
            >
              {"->"}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  restaurantsPerPage: PropTypes.number.isRequired,
  totalRestaurants: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
