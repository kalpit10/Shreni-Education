import React, { useState } from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import "../stylesheet/Faculty.css";
import Piyush from "../images/Piyush.png";
import PiyushModal from "./PiyushModal";

function PiyushTiwari() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <div className="border mt-16 p-8 md:p-24 rounded-lg bg-gray-50 shadow-2xl max-w-4xl mx-auto w-11/12 mb-5 transform transition-transform duration-500 hover:scale-105">
      <div className="flex flex-col items-center w-full">
        <img
          src={Piyush}
          className="rounded-full object-cover h-24 -mt-16 mb-8"
          alt="Director"
        />
        <h1 className="font-bold text-[#2e3192] text-center text-2xl">
          Piyush Kumar Tiwari
        </h1>
        <p className="text-black font-bold text-sm text-center">
          Director Administration
        </p>
        <p className="text-black text-lg text-center mb-6">
          Experience: 10 Years
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <FaInstagram size={24} className="text-blue-600" />
          <FaEnvelope size={24} className="text-blue-600" />
        </div>
        <button
          className="bg-[#2e3192] text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
          onClick={handleModal}
        >
          View Details
        </button>
        <PiyushModal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default PiyushTiwari;
