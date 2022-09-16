import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTERLINK } from "../../common/routerLink";

const Header = () => {
  return (
    <ul className="flex gap-5">
      {ROUTERLINK.map((item) => (
        <li key={item.id}>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to={item.path}
          >
            {item.nameLink}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Header;
