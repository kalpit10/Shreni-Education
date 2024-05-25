import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import HS from "../images/Vandana.png";
import "../stylesheet/Faculty.css";
import VandanaModal from "./VandanaModal";

function VandanaSwami() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div className="round-image border mt-16 p-8 md:p-24 rounded-lg bg-gray-50 shadow-2xl max-w-4xl mx-auto w-11/12 mb-5 transform transition-transform duration-500 hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={HS}
          className="rounded-full object-cover h-28 -mt-16 mb-8 md:h-32"
          alt="Faculty"
        />
        <h1 className="font-bold text-[#2e3192] text-center text-2xl hover-underline-animation-faculty whitespace-nowrap">
          Vandana Swami
        </h1>
        <p className="text-black font-bold text-sm text-center whitespace-nowrap">
          Faculty - Hindi-Sanskrit(Online)
        </p>
        <p className="text-black text-lg text-center mb-6 whitespace-nowrap">
          Experience: 22 Years
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto: vandanaswami0714@gmail.com">
            <BiLogoGmail size={24} className="text-blue-600" />
          </a>
        </div>
        <button className="classy-button" onClick={handleModal}>
          View Details
        </button>
        <VandanaModal
          isVisible={showModal}
          onClose={() => {
            setShowModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default VandanaSwami;
