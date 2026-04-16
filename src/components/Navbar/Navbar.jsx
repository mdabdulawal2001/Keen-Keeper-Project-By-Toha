import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineClock,
} from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-3 rounded-lg text-[17px] font-semibold transition-colors duration-200 
            ${
              isActive
                ? "bg-[#2D5243] text-white"
                : "text-gray-700 hover:text-[#2D5243] hover:bg-transparent"
            }`
          }
        >
          <HiOutlineHome className="text-[20px]" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/time-line-item"
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-colors duration-200 
            ${
              isActive
                ? "bg-[#2D5243] text-white"
                : "text-gray-700 hover:text-[#2D5243] hover:bg-transparent"
            }`
          }
        >
          <HiOutlineClock className="text-xl" /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 text-base
            ${
              isActive
                ? "bg-[#2D5243] text-white"
                : "text-gray-700 hover:text-[#2D5243] hover:bg-transparent"
            }`
          }
        >
          <ImStatsDots className="text-lg" /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-white px-4 md:px-10 border-b border-gray-100 shadow-sm min-h-20">
          {/* left part */}
          <div className="flex-1 px-2 mx-2 text-3xl font-bold tracking-tight">
            <Link to="/">
              <span className="text-black">Keen</span>
              <span className="text-[#2D5243]">Keeper</span>
            </Link>
          </div>

          {/* right part */}
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal p-0 gap-3">{navLinks}</ul>
          </div>

          {/* Menu Icon */}
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost">
              <CgMenu className="text-2xl text-[#2D5243]" />
            </label>
          </div>
        </div>
      </div>

      {/* drawer */}
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-6 w-72 min-h-full bg-base-100 text-base-content gap-4">
          <div className="mb-8 px-2 py-3 text-3xl font-bold tracking-tight border-b">
            <span className="text-black">Keen</span>
            <span className="text-[#2D5243]">Keeper</span>
          </div>
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
