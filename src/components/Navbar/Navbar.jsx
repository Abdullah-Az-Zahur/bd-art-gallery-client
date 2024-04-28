import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="ml-9">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="ml-1">
        <NavLink to='/allItems'>All Art & craft Items</NavLink>
      </li>
      <li className="ml-1">
        <NavLink to='/addItem'>Add Craft Item</NavLink>
      </li>
      <li className="ml-1">
        <NavLink to='/myItem'>My Art&Craft List</NavLink>
      </li>
      <li className="ml-1">
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li className="ml-1">
        <NavLink to='/register'>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            className="w-10"
            src="../../../public/inkpx-word-art.png"
            alt=""
          />
          BD Art Gallery
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
