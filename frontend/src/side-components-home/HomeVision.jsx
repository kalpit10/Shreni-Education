import React from "react";
import "../stylesheet/Home.css";

function HomeVision() {
  return (
    <div className="py-2">
      <div style={{ backgroundColor: "#ffefe4", paddingBottom: "16px" }}>
        <div className="text-center my-8 text-4xl slide-in">
          <span>OUR VISION</span>
        </div>
        <div className="relative">
          <hr className="flex w-1/4 mx-auto h-1 my-8 border-0 rounded dark:bg-gray-700" />
          <div
            className="absolute left-1/2 animate-slide rounded"
            style={{
              width: "20px", // Adjust width of the sliding box
              height: "9px", // Adjust height of the sliding box
              backgroundColor: "red", // Adjust background color of the sliding box
              top: "50%", // Center vertically
              marginTop: "-5px", // Adjust to half of sliding box height
            }}
          />
        </div>
        <div className="text-center">
          <div className="max-w-screen-lg mx-auto w-80">
            <p className="text-xl slide-in">
              Shreni has been established with a crystal clear vision of
              nurturing the inner attributes of individual students. We want to
              extend a helping hand for our students to hold, trust and look up
              to for guidance. It is a place to nurture unconditional love,
              affection, responsibility and belief in oneself.
            </p>
          </div>
        </div>
      </div>
      <hr className="flex w-1/4 mx-auto h-1 my-8 border-0 rounded dark:bg-gray-400" />
      {/* ANOTHER PART */}
      <div className="text-white bg-purple-600 py-8 pl-3 pr-4">
        <div className="text-center mb-8 text-4xl slide-in">
          <span>WANT TO JOIN US?</span>
        </div>
        <div className="justify-center items-center">
          <div className="container max-w-screen-lg">
            <p className="text-xl slide-in">
              If you wish to work with us as an intern or as a full-time
              employee, please drop your resume and cover letter and we will get
              back to you via email or phone.
            </p>
          </div>
          <button className="bg-red-500 px-4 py-2 ml-2 rounded-xl text-white font-bold hover:text-slate-600 hover:bg-red-600 hover:border-2 hover:border-black hover:font-bold">
            Join us!
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeVision;
