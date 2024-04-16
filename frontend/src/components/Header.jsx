import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ShreniLogo from "../images/ShreniLogo.png";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Our Story" },
    { id: 3, text: "Our Team" },
    { id: 4, text: "Courses" },
    { id: 5, text: "Testimonials" },
    { id: 6, text: "Contact us", link: "/contact" },
  ];

  return (
    <div className="dark:bg-gray-900 flex justify-between items-center h-24 mx-auto px-4 text-white 2xl:w-11/12">
      {/* Logo */}
      <Link to="/">
        <img
          src={ShreniLogo}
          style={{ height: "35px" }}
          className="rounded-xl md:w-24"
          alt="Shreni Logo"
          loading="lazy"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <Link to={item.link}>
            <li
              key={item.id}
              className="p-4 hover:bg-[#9CF3C7] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden z-[2] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 dark:bg-gray-900 ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 z-[2] fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#E6F1F9] m-4">
          SHRENI.
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link to={item.link}>
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-[#9CF3C7] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
