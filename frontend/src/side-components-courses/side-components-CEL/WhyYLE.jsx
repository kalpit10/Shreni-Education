import React from "react";
import YLE2 from "../../images/YLE2.png";

function WhyYLE() {
  return (
    <div className="mt-12 xl:w-8/12 xl:mx-auto">
      <div className="border p-12 pb-auto bg-[#1561b8]">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={YLE2}
            alt="yle2"
            className="h-52 md:mr-8"
            loading="lazy" // Lazy loading enabled here
          />
          <div className="text-white xl:ml-28">
            <h1 className="font-bold text-xl mt-2 md:mt-0 whitespace-nowrap font-serif">
              Reasons to choose YLE:
            </h1>
            <ol start={1}>
              <li className="text-[#ffffff] mt-2">
                – There is no pass or fail – every child gets a Cambridge
                English Certificate which celebrates their achievements.
              </li>
              <li className="text-[#ffffff] mt-2">
                – The test uses realistic everyday situations to bring learning
                to life.
              </li>
              <li className="text-[#ffffff] mt-2">
                – The test covers all major varieties of English (e.g. British
                English, American English).
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyYLE;
