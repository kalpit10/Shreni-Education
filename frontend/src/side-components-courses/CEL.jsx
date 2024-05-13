import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import YLE1 from "../images/YLE.png";
import YLE from "./side-components-CEL/YLE";
import YLE02 from "./side-components-CEL/YLE02";
import YLE03 from "./side-components-CEL/YLE03";
import WhyYLE from "./side-components-CEL/WhyYLE";
import YLE04 from "./side-components-CEL/YLE04";
import YLE05 from "./side-components-CEL/YLE05";
import YLE06 from "./side-components-CEL/YLE06";
import YLE07 from "./side-components-CEL/YLE07";
import YLECarousel from "./side-components-CEL/YLECarousel";

function CEL() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          className="text-center my-8 mt-5 text-[#2e3192]"
        >
          Cambridge English Exams
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="justify"
          className=" mb-8 md:w-11/12 mx-auto"
        >
          We offer a wide range of courses, affiliated from Cambridge Assessment
          English, to our students. They become a part of a journey to the
          world's most widely accepted English qualifications by over 20,000
          employers, universities and government organisations, valid as English
          proficiency exams for study, work and immigration visas. They enrich
          the personality and give the students a head-start in English with
          their best 'Can Do Skills.'
        </Typography>
      </div>
      <div className="mt-16">
        <h1 className="text-3xl font-bold underline text-center font-serif">
          Young Learner's English
        </h1>
        <img src={YLE1} alt="YLE" className="mx-auto mt-5" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <YLE />
        <YLE02 />
        <YLE03 />
      </div>
      <WhyYLE />
      <div className="mt-12">
        <h1 className="text-3xl font-bold underline text-center font-serif">
          Levels A2 to C1
        </h1>
      </div>
      <div className="lg:-mt-12 grid grid-cols-1 lg:grid-cols-2">
        <YLE04 />
        <YLE05 />
        <YLE06 />
        <YLE07 />
      </div>
      <YLECarousel />
      <Footer />
    </div>
  );
}

export default CEL;
