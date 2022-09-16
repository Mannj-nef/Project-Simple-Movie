import React from "react";
import Button from "../button/Button";

const Banner = () => {
  return (
    <div className="mt-10 relative">
      <div className="ovelay absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg bg-opacity-80"></div>
      <div className="">
        <img
          src="https://cdn1.tuoitre.vn/zoom/600_315/2022/7/25/marvel-1658738317583685598873-crop-1658739420829980885447.jpg"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="absolute left-10 bottom-10">
        <h2 className="mb-10 text-4xl font-bold">Fall</h2>
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
          <Button>Watch</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
