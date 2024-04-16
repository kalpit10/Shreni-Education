import React from "react";
import EnrollmentImage from "../images/Enrollment.png";
import CambridgeCentre from "../images/CambridgeEnglishCentre.png";

function Curriculum() {
  return (
    <div>
      <div className="container">
        <img className="" src={EnrollmentImage} alt="Enrollment"></img>
      </div>
      <div className="w-9/12 text-3xl flex text-center ml-5 pt-5 font-bold">
        <h1>A course for every learner!</h1>
      </div>
      <div className="container pt-16">
        <img src={CambridgeCentre} alt="Cambridge Authorised Centre"></img>
      </div>
      <div className="container">
        <h1 className="text-2xl text-red-500 pt-5 text-center font-semibold">Cambridge English Exams</h1>
      </div>
    </div>
  );
}

export default Curriculum;
