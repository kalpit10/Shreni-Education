import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import ShreniLogo from "../images/ShreniLogo.png";
import { Link } from "react-router-dom";
import "../stylesheet/Home.css";

function Header() {
  const [nav, setNav] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Inside toggleCoursesDropdown function, prevent default behavior
  const toggleCoursesDropdown = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevent event propagation
    setCoursesDropdown((prevState) => !prevState);
  };

  // Function to close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      coursesDropdown &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setCoursesDropdown(false); // Close the dropdown when clicking outside
    }
  };

  useEffect(() => {
    // Attach event listener when the dropdown is open
    if (coursesDropdown) {
      document.addEventListener("click", handleClickOutside);
    } else {
      // Remove event listener when the dropdown is closed
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [coursesDropdown]);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Our Story", link: "/ourstory" },
    { id: 3, text: "Our Team", link: "/faculty" },
    {
      id: 4,
      text: "Courses",
      dropdown: [
        { id: 41, text: "Cambridge English Exams", link: "/cambridge-exams" },
        { id: 42, text: "School Curriculum", link: "/school-curriculum" },
        { id: 43, text: "Standardised Exams", link: "/standardised-exams" },
      ],
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className="relative bg-gray-900 flex justify-between items-center h-24 mx-auto px-4 text-white 2xl:w-11/12"
    >
      {/* Logo */}
      <Link to="/" className="custom-link">
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
          <Link to={item.link} className="custom-link" key={item.id}>
            <li
              onClick={handleClickOutside}
              className="p-4 hover:bg-[#9CF3C7] rounded-xl m-2 cursor-pointer duration-300 bg-gray-900"
            >
              <span className="flex items-center">
                {item.text}
                {item.id === 4 && ( // Check if item is "Courses"
                  <span
                    className="ml-2 transition ease-in-out duration-300"
                    onClick={(event) => toggleCoursesDropdown(event)}
                  >
                    {coursesDropdown ? ( // Open dropdown only when "Courses" is clicked
                      <AiOutlineClose size={20} />
                    ) : (
                      <FaCaretDown size={20} />
                    )}
                  </span>
                )}
              </span>
              {coursesDropdown &&
                item.id === 4 && ( // Render dropdown content only for "Courses" when open
                  <ul className="absolute md:right-2 shadow-md rounded-md bg-gray-900 mt-4">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        to={dropdownItem.link}
                        className="custom-link"
                        key={dropdownItem.id}
                      >
                        <li
                          key={dropdownItem.id}
                          className="hover:bg-[#9CF3C7] border-b px-4 rounded-xl m-4 cursor-pointer duration-300 hover:text-indigo-950"
                        >
                          {dropdownItem.text}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
            </li>
          </Link>
        ))}
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* // Mobile Navigation Menu */}

      <ul
        className={
          nav
            ? "fixed md:hidden z-[2] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500"
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
            {" "}
            <li
              key={item.id}
              className="flex justify-between p-4 border-b rounded-xl hover:bg-[#9CF3C7] duration-500 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
              {item.id === 4 && (
                <span
                  onClick={(event) => toggleCoursesDropdown(event)}
                  className="absolute right-0 pr-4"
                >
                  {coursesDropdown ? ( // Open dropdown only when "Courses" is clicked
                    <AiOutlineClose size={20} />
                  ) : (
                    <AiOutlinePlus size={20} />
                  )}
                </span>
              )}
            </li>
          </Link>
        ))}

        {/* Render dropdown content outside loop */}
        {coursesDropdown && (
          <ul className="pl-4 left-0 shadow-md rounded-md">
            <div className="pl-8 mt-2 text-white border-r-gray-900 bg-gray-900 border rounded-lg shadow-lg w-full px-4 py-2 transition ease-in-out duration-300">
              <Link to="/cambridge-exams">
                <li className="p-2 pl-44 border-b rounded-xl hover:bg-[#9CF3C7] duration-300 hover:text-black cursor-pointer border-gray-600 whitespace-nowrap">
                  - Cambridge English
                </li>
              </Link>
              <Link to="/school-curriculum">
                <li className="p-2 pl-44 border-b rounded-xl hover:bg-[#9CF3C7] duration-300 hover:text-black cursor-pointer border-gray-600 whitespace-nowrap">
                  - School Curriculum
                </li>
              </Link>

              <Link to="/standardised-exams">
                <li className="p-2 pl-44 border-b rounded-xl hover:bg-[#9CF3C7] duration-300 hover:text-black cursor-pointer border-gray-600 whitespace-nowrap">
                  - Standardised Exams
                </li>
              </Link>
            </div>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Header;
