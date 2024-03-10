import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ isScrolled }) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const links = [
    { id: 2, name: "Movies", link: "/movies" },
    { id: 3, name: "TV Shows", link: "/tv" },
    { id: 4, name: "Favorites", link: "/favorites" },
  ];
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  function getUser() {
    if (user?.email) {
      return user.email;
    }
    return "Guest";
  }

  //TODO fix navbar layout

  return (
    <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
      <div className="absolute w-full p-4 flex items-center justify-left z-50 ">
        <Link to="/">
          <h1 className="uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl">
            Mmmedia!!
          </h1>
        </Link>
        <div className="brand left flex justify-left text-2xl ">
          <ul className="links flex ">
            {links.map(({ id, name, link }) => {
              return (
                <li key={id} className="px-5">
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Search bar */}
        <div className="right justify-right flex text-2xl">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch /> {/* search icon */}
            </button>
            <input
              type="text"
              className="text-gray-600"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>

          {/* Login/Logoff/Signup buttons */}
          <div className="right justify-center flex flex-end text-sm ">
            <h4>Welcome, {getUser()}</h4>
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="capitalize bg-red-600 px-6 py-2 rounded cursor-pointer"
              >
                Log Out
              </button>
            ) : (
              <div>
                <Link to="/login">
                  <button className="capitalize pr-4">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="capitalize pr-4 bg-red-600 px-6 py-2 rounded cursor-pointer">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
