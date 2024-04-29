import React from "react";
import StartHeader from "./StartHeader";
import Header from "./Header";
import Footer from "./Footer";
import HomeWelcome from "../side-components-home/HomeWelcome";
import HomeCarousel from "../side-components-home/HomeCarousel";
import DirectorMessage from "../side-components-home/DirectorMessage";
import Contact from "./Contact";
import Curriculum from "../side-components-home/Curriculum";
import CurriculumSchool from "../side-components-home/CurriculumSchool";
import StandardisedExams from "../side-components-home/StandardisedExams";

function Home() {
  return (
    <div>
      <Header />
      <StartHeader />
      <HomeWelcome />
      <Curriculum />
      <CurriculumSchool />
      <StandardisedExams />
      <DirectorMessage />
      <HomeCarousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
