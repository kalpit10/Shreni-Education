import React from "react";
import SE3 from "../../images/SE3.png";

function SAT() {
  return (
    <div className="mt-12 mb-9">
      <div className="container">
        <img src={SE3} alt="IELTS" className="h-52"/>
        <h1 className="text-2xl font-bold font-serif mt-4 mx-auto w-11/12 md:pb-8">
          SAT (Scholastic Assessment Test){" "}
        </h1>
        <p className="mt-4 w-11/12 mx-auto">
          The <span className="font-bold">SAT </span> is a standardized test
          widely used for college admissions in the United States. The exam has
          four sections: Reading, Writing, Language and Math.
          <br />
          <br />
          <span className="font-semibold">
            *We at Shreni help you with the preparation of Reading, Writing and
            the Language section.
          </span>
        </p>
      </div>
    </div>
  );
}

export default SAT;
