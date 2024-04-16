import React from "react";
import ShreniLogo from "../images/Logo.png";

function StartHeader() {
  return (
    <div className="mt-5">
      <img src={ShreniLogo} alt="Shreni Logo" style={{height: "200px"}} className="mx-auto"></img>
    </div>
  );
}

export default StartHeader;
