import React from "react";
import SE2 from "../../images/SE2.png";

function GMAT() {
  const linkClick = () => {
    window.location.href = "https://www.mba.com/exams/gmat-exam";
  };
  return (
    <div className="mt-12">
      <div className="container">
        <img src={SE2} alt="IELTS" className="h-52" />
        <h1 className="text-2xl font-bold font-serif mt-4 mx-auto w-11/12">
          GMAT (Graduate Management Admission Test)
        </h1>
        <p className="mt-4 w-11/12 mx-auto">
          The <span className="font-bold">GMAT</span> measures your command of
          basic arithmetic, algebra, geometry, multi-source data analysis, and
          grammar. More importantly, it measures your ability to analyze and
          evaluate written material, think critically and solve problems. <br />
          <br />
          <span className="font-semibold">*Only English</span>
        </p>
        <div className="flex text-center pb-8 mt-4">
          <button className="classy-button-cur mx-auto" onClick={linkClick}>
            Official Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default GMAT;
