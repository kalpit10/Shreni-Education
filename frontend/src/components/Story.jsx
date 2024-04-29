import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurStory from "../side-components-story/OurStory";
import StudentCount from "../side-components-story/StudentCount";

function Story() {
  return (
    <div>
      <Header />
      <OurStory />
      <StudentCount />
      <Footer />
    </div>
  );
}

export default Story;
