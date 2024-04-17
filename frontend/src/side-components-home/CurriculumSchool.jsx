import React from "react";
import School from "../images/School.png";

function CurriculumSchool() {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto overflow-hidden mt-5 transform transition-transform duration-300 hover:scale-105 2xl:max-w-5xl">
      <div className="container mx-auto flex flex-col md:flex-row py-8 px-4">
        <div className="md:w-1/2">
          <img className="w-full" src={School} alt="School" />
        </div>

        {/* Course Details Section */}
        <div className="md:w-1/2 md:pl-8 md:order-1">
          <h1 className="text-3xl font-bold text-red-500 mb-4 mt-5">
            School Curriculum
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Students from Classes III to XII across CBSE, ICSE, and ISC boards
            identify their needs, learning styles and the pace at which learning
            comes comfortably to them. Our classes focus on every individual as
            a unique personality who needs to be nurtured, shown around the
            world, left alone to experience and carve a niche for themselves
            years after they stop going to school.
          </p>
        </div>
      </div>

      {/* Learn More Button Section */}
      <div className="text-center pb-8 md:ml-44">
        <button className="flex mx-auto bg-red-500 text-white rounded-lg py-2 px-6 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default CurriculumSchool;