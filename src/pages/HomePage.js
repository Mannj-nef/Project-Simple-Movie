import React from "react";
import useSWR from "swr";
import PropTypes from "prop-types";

import { fetcher, tmdb } from "../API/config";
import Banner from "../components/banner/Banner";
import MovieList from "../components/Movie/MovieList";

const movieMetas = {
  playing: {
    id: 1,
    title: "Now playing",
    typeApi: "now_playing",
  },
  rated: {
    id: 2,
    title: "Top Rated",
    typeApi: "top_rated",
  },
};

const HomePage = () => {
  return (
    <div className="container">
      {/* banner */}
      <Banner></Banner>
      {/* now palying */}
      <MovieMeta type={movieMetas.playing}></MovieMeta>
      {/* Top Rated */}
      <MovieMeta type={movieMetas.rated}></MovieMeta>
    </div>
  );
};

function MovieMeta({ type }) {
  const { typeApi, title } = type;
  const { data, error } = useSWR(tmdb.getMovie(typeApi), fetcher);
  const movie = data?.results || [];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold capitalize">{title}</h2>
      <MovieList listMovie={movie}></MovieList>
    </div>
  );
}

MovieMeta.propTypes = {
  type: PropTypes.object.isRequired,
};

export default HomePage;
