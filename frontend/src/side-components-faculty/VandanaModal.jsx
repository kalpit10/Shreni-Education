import React from "react";
import { FaTimes } from "react-icons/fa";
import Vandana from "../images/Vandana.png";
import "../stylesheet/Faculty.css";

function VandanaModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-zinc-950 bg-opacity-35 backdrop-blur-lg flex justify-center items-center h-full z-10">
      <div className="text-white w-11/12 h-5/6 overflow-y-auto rounded-lg p-4">
        <div className="-ml-3 p-4 flex items-center">
          <img
            src={Vandana}
            alt="Vandana"
            className="w-20 h-20 rounded-full -ml-5"
          />
          <div className="text-right ml-8">
            <h1 className="font-bold text-xl">Vandana Swami</h1>
            <p className="whitespace-nowrap">Faculty - Hindi-Sanskrit</p>
            <p>Experience: 22 Years</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-3">Faculty Description</h2>
          <p>
            <span className="font-semibold">
              Faculty for Hindi and Sanskrit
            </span>{" "}
            at Shreni Education with over 22 years of teaching experience. A
            distinguished gold medalist in Sanskrit, she excels in imparting
            knowledge and passion for these languages. Her engaging teaching
            methods and profound knowledge have inspired countless students.
          </p>
        </div>
      </div>
      <button
        className="text-white place-self-start text-2xl"
        onClick={onClose}
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default VandanaModal;
