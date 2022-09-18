import React from "react";
import Skeleton from "../loading/Skeleton";

const MovieSkeleton = () => {
  return (
    <div className="rounded-xl  shadow-2xl  relative">
      <div className="relative bg-[#28272a] bg-opacity-90 rounded-lg  z-10 p-3 ">
        <div className="h-[200px]">
          <Skeleton rounded="12px"></Skeleton>
        </div>
        <h3 className="mt-4 truncate ">
          <Skeleton height="30px"></Skeleton>
        </h3>
        <div className="flex justify-between items-center my-4">
          <span>
            <Skeleton height="30px" width="30px"></Skeleton>
          </span>
          <span>
            <Skeleton height="30px" width="30px"></Skeleton>
          </span>
        </div>
        <Skeleton height="50px"></Skeleton>
      </div>
    </div>
  );
};

export default MovieSkeleton;
