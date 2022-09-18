import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";

import MovieItem from "./MovieItem";
import MovieSkeleton from "./MovieSkeleton";

const MovieList = ({ listMovie, loading }) => {
  return (
    <div className="wrapp-slider mt-10">
      {!loading ? (
        <Swiper spaceBetween={40} slidesPerView="auto" grabCursor={true}>
          {!!listMovie.length &&
            listMovie.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieItem item={item}></MovieItem>
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Swiper spaceBetween={40} slidesPerView="auto" grabCursor={true}>
          {Array(20)
            .fill(null)
            .map((item) => (
              <SwiperSlide key={v4()}>
                <MovieSkeleton></MovieSkeleton>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
};

MovieList.propTypes = {
  listMovie: PropTypes.array,
  loadind: PropTypes.bool,
};

export default MovieList;
