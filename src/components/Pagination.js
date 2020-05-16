import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Pagination = ({ episodesPerPage, totalEpisodes, paginate }) => {
  const pagenumbers = [];
  for (let i = 1; i < Math.ceil(totalEpisodes / episodesPerPage); i++) {
    pagenumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pagenumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              className="page-link"
              style={{ color: "blue", width: "40px", padding: "13px" }}
              href="!#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
