import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { tmdb } from "../../API/config";

const MovieItem = ({ item }) => {
  const { poster_path } = item;
  return (
    <div className="rounded-xl  shadow-2xl  relative">
      <div className="relative bg-[#28272a] bg-opacity-90 rounded-lg  z-10 p-3 ">
        <div className="h-[200px]">
          <img
            src={tmdb.img500(poster_path)}
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
        src={tmdb.img500(poster_path)}
        alt=""
        className="h-[200px] w-[150px] left-1/2 -translate-x-1/2 top-20 rounded-3xl absolute object-cover"
      />
    </div>
  );
};

MovieItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MovieItem;
