import React from "react";
// import "../../stylesheet/Courses.css";

function YLE() {
  return (
    <div className="mt-12 mb-5">
      <div className="border p-12 pb-auto ml-auto mr-auto w-11/12 bg-[#c8133e] lg:pb-28 xl:pb-24">
        <h1 className="font-bold text-[#ffffff] text-4xl -mt-5 text-left">
          01
        </h1>

        <hr className="bg-[#ffffff] -ml-3 pb-0.5" />
        <div>
          <h2 className="text-[#fffdf6] text-lg whitespace-nowrap -ml-3 mt-3 font-semibold font-serif">
            Pre A1 Starters(YLE Starters)
          </h2>
          <p className="text-[#fffdf6] -ml-3 mt-2">
            <span className="font-bold">Pre A1 Starters</span> is the first of
            three Cambridge English Qualifications designed for young learners.
          </p>

          <p className="text-[#fffdf6] -ml-3 mt-5">
            This course can help your child take their first step towards:
          </p>
          <ol className="text-[#fffdf6]">
            <li className="font-semibold">
              – understanding basic English content on the internet
            </li>
            <li className="font-semibold">
              – enjoying books, songs, television and films in English
            </li>
            <li className="font-semibold">– making friends globally</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default YLE;
