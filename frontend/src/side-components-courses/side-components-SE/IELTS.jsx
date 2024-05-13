import React from "react";
import SE1 from "../../images/SE1.png";

function IELTS() {
  return (
    <div className="mt-12">
      <div className="container">
        <img src={SE1} alt="IELTS" className="h-52"/>
        <h1 className="text-2xl font-bold font-serif mt-4 mx-auto w-11/12">
          IELTS (International English Language Testing System)
        </h1>
        <p className="mt-4 w-11/12 mx-auto">
          The <span className="font-bold">IELTS</span> exam is for students and
          adults who wish to study further or work in abroad. It reflects some
          of the features of academic language and assesses whether you are
          ready to begin studying or training. It is also a requirement for
          migration to Australia, Canada, New Zealand and the UK. The test
          focuses on basic survival skills in broad social and workplace
          contexts.
        </p>
      </div>
    </div>
  );
}

export default IELTS;
