import React from "react";
import School from "../images/School.png";
import { useNavigate } from "react-router-dom";
import "../stylesheet/Home.css";

function CurriculumSchool() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/school-curriculum");
  };

  const linkClick = () => {
    window.location.href =
      "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/curriculum/";
  };

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto overflow-hidden mt-5 transform transition-transform duration-300 hover:scale-105 2xl:max-w-5xl">
      <div className="container mx-auto flex flex-col md:flex-row py-8 px-4">
        <div className="md:w-1/2">
          <img className="w-full md:mt-40 lg:mt-0" src={School} alt="School" />
        </div>

        {/* Course Details Section */}
        <div className="md:w-1/2 md:pl-8 md:order-1 justify-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4 mt-5 hover-underline-animation-home">
            School Curriculum
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Students from Classes I to XII across CBSE, ICSE, ISC and IGCSE
            boards identify their needs, learning styles and the pace at which
            learning comes comfortably to them. Our classes focus on every
            individual as a unique personality who needs to be nurtured, shown
            around the world, left alone to experience and carve a niche for
            themselves years after they stop going to school.
          </p>
          <div className="flex md:justify-start text-center pb-8 mt-3">
            <button
              className="classy-button-cur mr-3 whitespace-nowrap"
              onClick={handleClick}
            >
              Our Curriculum
            </button>
            <button
              className="classy-button-cur whitespace-nowrap"
              onClick={linkClick}
            >
              Official Website
            </button>
          </div>
        </div>
        {/* Learn More Button Section */}
      </div>
    </div>
  );
}

export default CurriculumSchool;
