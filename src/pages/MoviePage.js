import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { v4 } from "uuid";

import { fetcher, tmdb } from "../API/config";
import MovieItem from "../components/Movie/MovieItem";
import MovieSkeleton from "../components/Movie/MovieSkeleton";
import Paginate from "../components/paginate/Paginate";

const typeApi = "popular";
const MoviePage = () => {
  const [valueInput, setValueInput] = useState("");
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(tmdb.getMovie(typeApi));
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (valueInput.trim().length > 0) {
      setUrl(tmdb.searchMovie(valueInput, page));
    } else {
      setUrl(tmdb.getMovie(typeApi, page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(data);

  const movie = data?.results || [];
  const isLoading = !data && !error;

  console.log(page);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueInput.trim().length > 0) {
      setUrl(tmdb.searchMovie(valueInput));
    } else {
      setUrl(tmdb.getMovie(typeApi));
    }
  };

  return (
    <div className="">
      <form action="" onSubmit={handleSubmit} className="flex mt-10">
        <input
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
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
        {!isLoading
          ? !!movie.length &&
            movie.map((item) => (
              <MovieItem key={item.id} item={item}></MovieItem>
            ))
          : Array(20)
              .fill(null)
              .map((item) => <MovieSkeleton key={v4()}></MovieSkeleton>)}
      </div>

      <div className="mt-10 text-center ">
        <Paginate items={data} setPage={setPage}></Paginate>
      </div>
    </div>
  );
};

export default MoviePage;
