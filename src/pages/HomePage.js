import React from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetcher, tmdb } from "../API/config";
import Banner from "../components/banner/Banner";
import Button from "../components/button/Button";

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
      <div className="">
        <Swiper spaceBetween={50}>
          {!!movie.length &&
            movie.map((item) => (
              <SwiperSlide
                key={item.id}
                className="rounded-xl  shadow-2xl  relative"
              >
                <div className="relative bg-[#28272a] bg-opacity-90 rounded-lg  z-10 p-3 ">
                  <div className="h-[200px]">
                    <img
                      src={tmdb.img500(item.poster_path)}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg "
                    />
                  </div>
                  <h3 className="mt-4 truncate ">{item.title}</h3>
                  <p className="flex justify-between items-center my-4">
                    <span>{new Date(item.release_date).getFullYear()}</span>
                    <span>{item.vote_average}</span>
                  </p>
                  <Button className={"w-full"}>Watch</Button>
                </div>
                <img
                  src={tmdb.img500(item.poster_path)}
                  alt=""
                  className="h-[200px] w-[150px] left-1/2 -translate-x-1/2 top-20 rounded-3xl absolute object-cover"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

MovieMeta.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HomePage;
