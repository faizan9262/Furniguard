import React, { useContext, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { WebContext } from "../context/WebContext";

const Navbar = () => {
  const { loggedin,name,removeToken } = useContext(WebContext);
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  const [menuOpen, setMenuOpen] = useState(false); // State to track the menu's visibility
  const navigate = useNavigate();

  if (isAuthPage) return null; // Don't render the Navbar if on the auth pages

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close
  };

  const handleLogout = () =>{
    removeToken()
  }

  
  console.log(name);
  

  return (
    <div
      className={`flex items-center justify-between gap-4 text-xl sticky top-0 z-20 bg-primary text-white px-8 py-2`}
    >
      <CiMenuBurger
        className={`text-white w-6 h-6 block sm:hidden cursor-pointer`}
        onClick={toggleMenu} // Toggle the menu on click
      />
      <span
        onClick={() => navigate("/")}
        className="text-xl sm:text-2xl font-semibold shadow-lg border-2 border-secondary bg-secondary cursor-pointer rounded-full py-1 px-3 "
      >
        FURNIGUARD&reg;
      </span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <NavLink to="/">
          <li>Home</li>
          <hr className="border-none outline-none h-1 bg-white  rounded-full w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
          <hr className="border-none outline-none h-1 bg-white  rounded-full w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/rooms">
          <li>Rooms</li>
          <hr className="border-none outline-none h-1 bg-white  rounded-full w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/layout">
          <li>Layout</li>
          <hr className="border-none outline-none h-1 bg-white  rounded-full w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/designers">
          <li>Designers</li>
          <hr className="border-none outline-none h-1 bg-white  rounded-full w-4/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
          <hr className="border-none outline-none h-1 bg-white  rounded-full w-4/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* Mobile Menu with slide-in from left transition */}
      <ul
        className={`absolute top-16 left-0 bg-secondary text-white w-1/2 ml-2 flex flex-col items-start gap-4 py-4 pl-8 sm:hidden transition-all duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }} // Prevent interaction when hidden
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/products" onClick={() => setMenuOpen(false)}>
          <li>Products</li>
        </NavLink>
        <NavLink to="/rooms" onClick={() => setMenuOpen(false)}>
          <li>Rooms</li>
        </NavLink>
        <NavLink to="/layout" onClick={() => setMenuOpen(false)}>
          <li>Layout</li>
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          <li>About</li>
        </NavLink>
        <NavLink to="/designers" onClick={() => setMenuOpen(false)}>
          <li>Designers</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        {loggedin ? (
          <div className="flex items-center gap-2 cursor-pointer group relative mx-2">
            <FaUserCircle className="w-8 h-8 text-white" />
            <p className="text-white">{name}</p>
            <div className="absolute top-0 right-0 z-20 pt-14 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 text-black rounded-lg flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/profile")}
                  className="text-lg font-medium hover:text-primary"
                >
                  My Profile
                </p>
                <p
                  onClick={handleLogout}
                  className="text-lg font-medium hover:text-primary"
                >
                  Log Out
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/register")}
            className="bg-secondary shadow-md text-white rounded-full px-5 sm:px-8 py-2 text-sm font-medium sm:font-light"
          >
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
