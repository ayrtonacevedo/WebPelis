import React from "react";
import "./Paginado.css";

const Pagination = ({
  currentPage,
  totalPage,
  loadMoreMovies,
  prevMovies,
  goToPage,
}) => {
  // Define el rango de páginas a mostrar (5 antes y 5 después de la página actual)
  const pageRange = 5;
  const startPage = Math.max(1, currentPage - pageRange);
  const endPage = Math.min(totalPage, currentPage + pageRange);

  const pageButtons = [];

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => goToPage(i)}
        className={`page-number ${currentPage === i ? "active" : ""}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={prevMovies} className="buttonPage">
          Prev
        </button>
      )}
      {pageButtons}
      {currentPage < totalPage && (
        <button onClick={loadMoreMovies} className="buttonPage">
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
