import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="flex items-center justify-center gap-8">
      <li>
        <NavLink
          to={"/"}
          className="hover:border-b py-1 px-2 hover:text-red-600"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className="hover:border-b py-1 px-2 hover:text-red-600"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/posts"} className="hover:border-b py-1 px-2 hover:text-red-600">
          Posts
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
