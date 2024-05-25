import React from "react";
import { FaTimes } from "react-icons/fa";
import Navita from "../images/Navita.png";
import "../stylesheet/Faculty.css";

function NavitaTewariModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-zinc-950 bg-opacity-35 backdrop-blur-lg flex justify-center items-center h-full z-10">
      <div className="text-white w-11/12 h-5/6 overflow-y-auto rounded-lg p-4">
        <div className="-ml-3 p-4 flex items-center">
          <img
            src={Navita}
            alt="Navita"
            className="w-20 h-20 rounded-full -ml-5"
          />
          <div className="text-right ml-8">
            <h1 className="font-bold text-xl whitespace-nowrap">
              Navita Tewari
            </h1>
            <p className="whitespace-nowrap">Director Academics</p>
            <p className="whitespace-nowrap">Experience: 31 Years</p>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-3">Faculty Description</h2>
          <p>
            <span className="font-semibold"> Director Academics</span> at Shreni
            Education with over 31 years of teaching experience as{" "}
            <span className="font-semibold">
              {" "}
              Senior Secondary Headmistress
            </span>{" "}
            at Jiva Public School and Manav Rachna International School,
            Faridabad. She is also the Head of English Department and teaches
            the following subjects:
            <ul className="mt-1 custom-emoji">
              <li>English</li>
              <li>IELTS</li>
              <li>Social Studies</li>
              <li>Psychology</li>
              <li>Cambridge English Exams</li>
              <li>GMAT (ENGLISH)</li>
              <li>SAT (ENGLISH)</li>
              <li>History</li>
              <li>Geography</li>
              <li>Political Science</li>
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

export default NavitaTewariModal;
