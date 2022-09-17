import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieItem from "./MovieItem";

const MovieList = ({ listMovie }) => {
  return (
    <div className="wrapp-slider mt-10">
      <Swiper spaceBetween={40} slidesPerView="auto" grabCursor={true}>
        {!!listMovie.length &&
          listMovie.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem item={item}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  listMovie: PropTypes.array,
};

export default MovieList;
