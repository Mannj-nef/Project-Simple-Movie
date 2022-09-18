import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ROUTERLINK } from "../../common/routerLink";

const Header = ({ className }) => {
  return (
    <ul className={`flex gap-5 ${className || ""}`}>
      {ROUTERLINK.filter((item) => item.nameLink !== "Detail").map((item) => (
        <li key={item.id}>
          <NavLink
            className={({ isActive }) => {
              // console.log(isActive, item.nameLink);
              return isActive ? "text-primary" : "";
            }}
            to={item.path}
          >
            {item.nameLink}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Header.propsTypes = {
  className: PropTypes.string,
};

export default Header;
