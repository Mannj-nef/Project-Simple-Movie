import React from "react";
import MovieItem from "../components/Movie/MovieItem";

const MoviePage = () => {
  return (
    <div className="">
      <form action="" className="flex mt-10">
        <input
          type="text"
          className="bg-[#1e293b] rounded-tl-md p-4 flex-1 outline-none"
        />
        <button className="bg-primary py-3 px-4 rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {Array(20)
          .fill(null)
          .map((item, index) => (
            <MovieItem key={index}></MovieItem>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
