import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";

import Button from "../button/Button";
import { fetcher, tmdb } from "../../API/config";

const Banner = () => {
  const { data, error } = useSWR(tmdb.getMovie("popular"), fetcher);
  const movie = data?.results || [];

  const navigate = useNavigate();

  return (
    <Swiper spaceBetween={40} grabCursor={true} slidesPerView="auto">
      {!!movie.length &&
        movie.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="mt-10 relative">
              <div className="ovelay absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg bg-opacity-80"></div>
              <div className="">
                <img
                  src={tmdb.imgOriginal(item.backdrop_path)}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="absolute left-10 bottom-10">
                <h2 className="mb-10 text-4xl font-bold">{item.title}</h2>
                <div className="flex gap-4 mb-10">
                  <button className="border border-white rounded-md px-4 py-2">
                    Action
                  </button>
                  <button className="border border-white rounded-md px-4 py-2">
                    Action
                  </button>
                  <button className="border border-white rounded-md px-4 py-2">
                    Action
                  </button>
                </div>
                <div>
                  <Button handler={() => navigate(`/detail/${item.id}`)}>
                    Watch
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Banner;
