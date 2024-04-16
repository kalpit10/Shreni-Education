import React from "react";
import ShreniLogo from "../images/ShreniLogo.png";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import "../stylesheet/Footer.css";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 dark:bg-gray-900 flex-grow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 mx-auto">
            <Link to="/" className="flex">
              <img src={ShreniLogo} className="h-8 me-3" alt="Shreni Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap sm:justify-center sm:mx-auto dark:text-white">
                Shreni Education
              </span>
            </Link>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:justify-between justify-center text-gray-500 sm:text-center dark:text-gray-400">
            &copy; {currentYear}{" "}
            <Link to="/" className="hover:underline">
              Shreni Education
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex sm:flex sm:justify-between justify-center mt-4">
            <Link to="https://www.instagram.com/shrenieducation/">
              <FaInstagram
                className="bg-white rounded text-instagram cursor-pointer"
                size={24}
              />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100064210085451">
              <FaFacebook
                className="mx-3 bg-white text-facebook rounded cursor-pointer"
                size={24}
              />
            </Link>
            <a href="mailto:shrenieducation@gmail.com">
              <BiLogoGmail
                className=" bg-white text-gmail rounded cursor-pointer"
                size={24}
              />
            </a>
            <Link to="https://www.linkedin.com/company/shrenieducation/about/">
              <FaLinkedin
                className="mx-3 bg-white text-linkedin rounded cursor-pointer"
                size={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
