import { Link, NavLink } from "react-router-dom";

import userDefaultPic from "../../assets/user.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("wireframe");
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have successfully logged out.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })

      .catch((error) => console.error(error));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localtheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("wireframe");
    }
  };

  // console.log(theme);

  const navLinks = (
    <>
      <li className="ml-9">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-1">
        <NavLink to="/allItems">All Art</NavLink>
      </li>
      {user && (
        <>
          <li className="ml-1">
            <NavLink to="/addItem">Add Art</NavLink>
          </li>
          <li className="ml-1">
            <NavLink to="/myItem">My Art&Craft</NavLink>
          </li>
        </>
      )}

      {/* <li className="ml-1">
        <NavLink to="/login">Login</NavLink>
      </li> */}
      <li className="ml-1">
        <NavLink to="/register">Register</NavLink>
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
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            className="w-10"
            src="../../../public/inkpx-word-art.png"
            alt=""
          />
          BD Art Gallery
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* theme control */}
        <div>
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        {/* user display */}
        <div>
          {user ? (
            <div className="flex gap-2 items-center">
              <div title={user?.displayName || ""} className="avatar">
                <div className="w-12 rounded-full">
                  <div>
                    <img src={user?.photoURL || userDefaultPic} />
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-ghost btn-circle avatar:hidden  display  "
              >
                Log Out
              </button>{" "}
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-ghost btn-circle avatar:hidden display  "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
