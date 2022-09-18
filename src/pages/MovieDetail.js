import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import { fetcher, tmdb } from "../API/config";
import Header from "../components/header/Header";
import Button from "../components/button/Button";
import MovieList from "../components/Movie/MovieList";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, error } = useSWR(tmdb.getDetailMovie(id), fetcher);

  if (!data) return null;
  const { title, genres, poster_path, backdrop_path, overview } = data;

  return (
    <>
      <Header className="absolute left-1/2 -translate-x-1/2 mt-5 z-[999]"></Header>
      <div className="w-full h-[600px] relative ">
        <div className="ovlay absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          style={{
            backgroundImage: `url(${tmdb.imgOriginal(backdrop_path)})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="px-10">
        <div className="h-[400px] w-[800px] -mt-[200px] mx-auto z-10 relative">
          <img
            src={tmdb.img500(poster_path)}
            className="w-full h-full object-cover rounded-lg"
            alt=""
          />
        </div>
        <h2 className="text-center text-4xl font-bold mt-10">{title}</h2>
        <div className="flex gap-5 items-center justify-center mt-10">
          {!!genres.length &&
            genres.map((item) => (
              <Button
                key={item.id}
                className="rounded-2xl bg-transparent border border-secondary text-secondary"
              >
                {item.name}
              </Button>
            ))}
        </div>
        <p className="w-[700px] mx-auto mt-10 leading-9 tracking-wide text-center">
          {overview}
        </p>
        {/* credits */}
        <MovieMeta type="credits"></MovieMeta>
        {/* videos */}
        <MovieMeta type="videos"></MovieMeta>
        {/* similar */}
        <MovieMeta type="similar"></MovieMeta>
      </div>
    </>
  );
};

function MovieMeta({ type }) {
  const { id } = useParams();
  const { data, error } = useSWR(tmdb.getMeta(type, id), fetcher);

  if (!data) return null;

  if (type === "credits") {
    const casts = data.cast;
    return (
      <div className="wrapp-slider mt-10">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView="auto">
          {!!casts.length &&
            casts.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative rounded-lg">
                  <div className="ovlay absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg bg-opacity-80"></div>
                  <img
                    src={tmdb.img500(item.profile_path)}
                    className="w-full h-full object-cover rounded-lg"
                    alt={item.name}
                  />
                  <p className="absolute bottom-5 text-center w-full text-2xl">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  } else {
    const results = data.results;

    console.log(type, data);
    return (
      <>
        {type === "videos" ? (
          <div className="mt-10">
            <h2 className="capitalize font-bold text-4xl mb-5 text-center">
              trailer
            </h2>
            {!!results.length &&
              results
                .slice(0, 1)
                .map((item) => (
                  <iframe
                    width="916"
                    height="515"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="HTML & CSS - How to Embed a YouTube Video in Your Website"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="text-center m-auto"
                  ></iframe>
                ))}
          </div>
        ) : type === "similar" ? (
          <div className="my-10">
            <h2 className="capitalize font-bold text-4xl mb-5 text-center">
              similar
            </h2>
            <MovieList listMovie={results}></MovieList>
          </div>
        ) : null}
      </>
    );
  }
}

MovieMeta.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieDetail;
