import React from "react";

import { useNavigate } from "react-router-dom";

import { IoHomeSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  let { pathname } = useLocation();

  return (
    <div className="flex items-center h-16 w-screen bg-dark-orange max-sm:justify-center shadow-md">
      <NavLink to="/">
        <div className="m-2 font-semibold text-white text-lg">
          TravelMedia.in
        </div>
      </NavLink>
      <div className="Options flex flex-1 justify-center max-sm:hidden">
        <div className="bg-white flex gap-16 h-10 items-center justify-center p-4 rounded-full">
          <NavLink to="/">
            <IoHomeSharp
              className={`${pathname === "/" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
            />
          </NavLink>
          <NavLink to="/notification">
            <FaBell
              className={`${pathname === "/notification" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
            />
          </NavLink>
          <NavLink to="/bookmark">
            <FaBookmark
              className={`${pathname === "/bookmark" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
            />
          </NavLink>
          <NavLink to="/user/details">
            <FaUser
              className={`${pathname === "/user/details" ? "text-dark-orange" : "text-light-orange"} hover:text-dark-orange text-2xl`}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;