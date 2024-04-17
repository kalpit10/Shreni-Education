import React from "react";
import EnrollmentImage from "../images/Enrollment.png";
import CambridgeCentre from "../images/CambridgeEnglishCentre.png";

function Curriculum() {
  return (
    <div>
      <div className="container mx-auto py-8 px-4">
        <img
          className="w-full xl:w-9/12 xl:mx-auto"
          src={EnrollmentImage}
          alt="Enrollment"
        />
      </div>
      <div className="text-center py-4 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          A course for every learner!
        </h1>
      </div>

      <div className="bg-white shadow-lg max-w-4xl mx-auto rounded-lg overflow-hidden mt-5 2xl:max-w-5xl transform transition-transform duration-300 hover:scale-105">
        <div className="container mx-auto flex flex-col md:flex-row py-8 px-4">
          <div className="md:w-1/2">
            <img
              className="w-full"
              src={CambridgeCentre}
              alt="Cambridge Authorised Centre"
            />
          </div>

          {/* Course Details Section */}
          <div className="md:w-1/2 md:pl-8 md:order-1">
            <h1 className="text-3xl font-bold text-red-500 mb-4 mt-5">
              Cambridge English Exams
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              A journey to the world’s most widely accepted English
              qualifications by over 20,000 employers, universities, and
              government organisations, valid as English proficiency exams for
              study, work, and immigration visas.
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
    </div>
  );
}

export default Curriculum;
