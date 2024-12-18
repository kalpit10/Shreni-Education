import React from "react";
import { FaTimes } from "react-icons/fa";
import Piyush from "../images/Piyush.png";
import "../stylesheet/Faculty.css";

function PiyushModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-zinc-950 bg-opacity-35 backdrop-blur-lg flex justify-center items-center h-full z-50">
      <div className="text-white w-11/12 h-5/6 overflow-y-auto rounded-lg p-4">
        <div className="-ml-3 p-4 flex items-center">
          <img
            src={Piyush}
            alt="Navita"
            className="w-20 h-20 rounded-full -ml-5"
            loading="lazy"
          />
          <div className="text-right ml-8 whitespace-nowrap">
            <h1 className="font-bold text-xl">Piyush Kumar Tiwari</h1>
            <p>Director Administration</p>
            <p>Experience: 12 Years</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-3">Faculty Description</h2>
          <p>
            <span className="font-semibold"> Director Administration</span> at
            Shreni Education with over 12 years of teaching experience. He also
            has 24 years of experience as
            <span className="font-semibold"> Internal Auditor. </span> He is
            also the Head of Maths and Commerce Department and teaches the
            following subjects:
            <ul className="mt-1 custom-emoji">
              <li>Maths (Till Class X)</li>
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Income Tax</li>
            </ul>
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

export default PiyushModal;
