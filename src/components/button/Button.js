import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, handler, primary = false }) => {
  return (
    <button
      className={`px-10 py-3 text-2xl rounded-lg capitalize ${className} ${
        primary ? "bg-primary" : ""
      }`}
      onClick={handler}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handler: PropTypes.func,
  primary: PropTypes.bool,
};

export default Button;
