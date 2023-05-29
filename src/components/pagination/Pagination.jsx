import React from "react";
import "./pagination.module.css";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (num) => {
    setCurrentPage(num);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item text-dark">
          <a
            class={`page-link ${currentPage === 1 ? "disabled" : ""}`}
            aria-label="Previous"
            onClick={onPreviousPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((noPage) => (
          <li
            class={`page-item ${noPage === currentPage ? "active" : ""}`}
            key={noPage}
          >
            <a class="page-link" onClick={() => onSpecificPage(noPage)}>
              {noPage}
            </a>
          </li>
        ))}

        <li class="page-item">
          <a
            class={`page-link ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
            aria-label="Next"
            onClick={onNextPage}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
