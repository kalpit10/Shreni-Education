import React from "react";
import SE1 from "../../images/SE1.png";

function IELTS() {
  const linkClick = () => {
    window.location.href = "https://ielts.org/";
  };

  return (
    <div className="mt-12">
      <div className="container">
        <img src={SE1} alt="IELTS" className="h-52" />
        <h1 className="text-2xl font-bold font-serif mt-4 mx-auto w-11/12">
          IELTS (International English Language Testing System)
        </h1>
        <p className="mt-4 w-11/12 mx-auto">
          The <span className="font-bold">IELTS</span> exam is for those who
          either wish to study further or work abroad. It is a requirement for
          proving your proficiency in english all around the world.
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

export default IELTS;
