import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HorizontalLine from "../side-components-home/HorizontalLine";
import "../stylesheet/Faculty.css";
import NavitaTewari from "../side-components-faculty/NavitaTewari";
import PiyushTiwari from "../side-components-faculty/PiyushTiwari";
import VandanaSwami from "../side-components-faculty/VandanaSwami";

function Team() {
  return (
    <div className="bg-[#FFFAFA]">
      <Header />
      <h1 className="text-center p-4 text-xl font-bold text-[#2e3192]">
        OUR FACULTY MEMBERS
      </h1>
      <div className="relative negative-margin">
        <HorizontalLine />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <NavitaTewari />
        <PiyushTiwari />
        <VandanaSwami />
      </div>
      <div className="xl:mb-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Team;
