import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Director from "../images/Navita.png";
import "../stylesheet/Faculty.css";
import NavitaTewariModal from "./NavitaTewariModal";
import { Link } from "react-router-dom";

function NavitaTewari() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div className="round-image border mt-16 p-8 md:p-24 rounded-lg bg-gray-50 shadow-2xl max-w-4xl mx-auto w-11/12 mb-5 transform transition-transform duration-500 hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={Director}
          className="rounded-full object-cover h-28 -mt-16 mb-8 md:h-32"
          alt="Director"
          loading="lazy"
        />
        <h1 className="font-bold text-[#2e3192] text-center text-2xl hover-underline-animation-faculty whitespace-nowrap">
          Navita Tewari
        </h1>
        <p className="text-black font-bold text-sm text-center whitespace-nowrap">
          Director Academics
        </p>
        <p className="text-black text-lg text-center mb-6 whitespace-nowrap">
          Experience: 32 Years
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <Link to="https://www.linkedin.com/in/navita-tewari-4328b5b3/">
            <FaLinkedin size={24} className="text-blue-600" />
          </Link>
          <a href="mailto: neenutewari@yahoo.com">
            <BiLogoGmail size={24} className="text-blue-600" />
          </a>
        </div>
        <button className="classy-button" onClick={handleModal}>
          View Details
        </button>
        <NavitaTewariModal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default NavitaTewari;
