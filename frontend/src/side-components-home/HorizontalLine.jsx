import React from "react";

function HorizontalLine() {
  return (
    <div>
      <hr
        className="flex w-1/3 mx-auto h-0.5 my-3 border-0 rounded md:h-0.5 sm:w-1/6 md:w-1/6 xl:w-1/12"
        style={{ backgroundColor: "#2e3192" }}
      />
      <div
        className="absolute left-1/2 animate-slide rounded"
        style={{
          width: "30px", // Adjust width of the sliding box
          height: "5px", // Adjust height of the sliding box
          backgroundColor: "#d1143e", // Adjust background color of the sliding box
          top: "170%", // Center vertically
          marginTop: "-5px", // Adjust to half of sliding box height
        }}
      />
    </div>
  );
}

export default HorizontalLine;
