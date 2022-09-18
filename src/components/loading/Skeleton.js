import React from "react";
import PropTypes from "prop-types";

const Skeleton = ({
  children,
  width = "100%",
  height = "100%",
  rounded = "3px",
}) => {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        borderRadius: rounded,
      }}
    >
      {children}
    </div>
  );
};

Skeleton.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.string,
};

export default Skeleton;
