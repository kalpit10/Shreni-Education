import React from "react";
import Exams from "../images/Ielts.png";
import "../stylesheet/Home.css";

function StandardisedExams() {
  return (
    <div className="bg-white shadow-lg rounded-lg md:max-w-4xl mx-auto overflow-hidden mt-5 transform transition-transform duration-300 hover:scale-105 2xl:max-w-5xl">
      {/* Flex container to manage layout */}
      <div className="container mx-auto flex flex-col md:flex-row py-8 px-4">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img className="w-full" src={Exams} alt="School" />
        </div>

        {/* Course Details Section */}
        <div className="md:w-1/2 md:pl-8 md:order-1">
          <h1 className="text-3xl font-bold text-red-500 mb-4 mt-5">
            Standardised Exams
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Shreni excels in training students for standardised exams such as
            IELTS, GMAT and SAT. We do it in three phases by discussing the
            tasks first followed by developing the accuracy and later
            fine-tuning the mind, body, and soul to crack the exam.
          </p>
        </div>
      </div>

      {/* Learn More Button Section */}
      <div className="text-center pb-8 md:ml-44">
        <button className="classy-button-cur">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default StandardisedExams;
