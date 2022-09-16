import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

const MovieItem = ({ item }) => {
  return (
    <div className="rounded-xl  shadow-2xl  relative">
      <div className="relative bg-[#28272a] bg-opacity-90 rounded-lg  z-10 p-3 ">
        <div className="h-[200px]">
          <img
            src="https://cdn1.tuoitre.vn/zoom/600_315/2022/7/25/marvel-1658738317583685598873-crop-1658739420829980885447.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg "
          />
        </div>
        <h3 className="mt-4">Avengers</h3>
        <p className="flex justify-between items-center my-4">
          <span>2022</span>
          <span>8</span>
        </p>
        <Button className={"w-full"}>Watch</Button>
      </div>
      <img
        src="https://cdn1.tuoitre.vn/zoom/600_315/2022/7/25/marvel-1658738317583685598873-crop-1658739420829980885447.jpg"
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
