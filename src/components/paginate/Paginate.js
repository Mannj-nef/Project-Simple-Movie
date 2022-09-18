import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const Paginate = ({ items = {}, setPage }) => {
  const { total_results } = items;

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (total_results) setPageCount(Math.ceil(total_results / itemsPerPage));
  }, [total_results]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      activeLinkClassName="text-white bg-[#f62682]"
      containerClassName={"inline-flex -space-x-px items-center"}
      breakClassName="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      previousClassName="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      pageLinkClassName="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      nextClassName="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
    />
  );
};

export default Paginate;
