import React from "react";
import ShreniLogo from "../images/Logo.png";

function StartHeader() {
  return (
    <div className="mt-2">
      <img src={ShreniLogo} alt="Shreni Logo" style={{height: "150px"}} className="mx-auto" loading="lazy"></img>
    </div>
  );
}

export default StartHeader;
