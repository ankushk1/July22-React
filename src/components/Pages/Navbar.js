import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../../index.css';

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black"
            };
          }}
          to="/home"
          className={({isActive}) => isActive ? "fs-30" : null}

        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black"
            };
          }}
          className={({isActive}) => isActive ? "fs-30" : null}
          to="/contact"
        >
          Contact Page
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "red" : "black"
            };
          }}
          className={({isActive}) => isActive ? "fs-30" : null}

          to="/signup"
        >
          Sign up
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
