import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, className, handler }) => {
  return (
    <button
      className={`bg-primary px-10 py-3 text-2xl rounded-lg capitalize ${className}`}
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
};

export default Button;
