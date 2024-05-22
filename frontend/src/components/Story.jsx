import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurStory from "../side-components-story/OurStory";
import StudentCount from "../side-components-story/StudentCount";
import HorizontalLine from "../side-components-home/HorizontalLine";

function Story() {
  return (
    <div className="bg-[#FFFAFA]">
      <Header />
      <h1 className="text-center p-4 text-3xl font-bold text-[#2e3192]">
        OUR JOURNEY
      </h1>
      <div className="relative negative-margin">
        <HorizontalLine />
      </div>
      <OurStory />
      <StudentCount />
      <Footer />
    </div>
  );
}

export default Story;
