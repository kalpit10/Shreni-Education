import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Director from "../images/Navita.png";
import "../stylesheet/Faculty.css";
import NavitaTewariModal from "./NavitaTewariModal";

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
          className="rounded-full object-cover h-24 -mt-16 mb-8"
          alt="Director"
        />
        <h1 className="font-bold text-[#2e3192] text-center text-2xl">
          Navita Tewari
        </h1>
        <p className="text-black font-bold text-sm text-center">
          Director Academics
        </p>
        <p className="text-black text-lg text-center mb-6">
          Experience: 27 Years
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <FaInstagram size={24} className="text-blue-600" />
          <FaLinkedin size={24} className="text-blue-600" />
          <FaEnvelope size={24} className="text-blue-600" />
        </div>
        <button
          className="classy-button"
          onClick={handleModal}
        >
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
