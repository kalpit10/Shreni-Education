import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnglishSubject from "./side-components-schoolcurriculum/English";
import MathsSubject from "./side-components-schoolcurriculum/MathsSubject";
import SocialStudies from "./side-components-schoolcurriculum/SocialStudies";
import Psychology from "./side-components-schoolcurriculum/Psychology";
import Accountancy from "./side-components-schoolcurriculum/Accountancy";
import IncomeTax from "./side-components-schoolcurriculum/IncomeTax";
import { Typography } from "@mui/material";

const SchoolCurriculum = () => {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-4">
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          className="text-center my-8 mt-5 text-[#2e3192]"
        >
          School Curriculum
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="justify"
          className=" mb-8 md:w-7/12 mx-auto"
        >
          The teachers at Shreni hold years of experience and we believe in
          teaching your child the best. Therefore, we offer a wide range of
          subjects that we teach to make your child help understand the school
          curriculum better.
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div>
            <EnglishSubject />
          </div>
          <div className="-mt-24">
            <MathsSubject />
          </div>
          <div className="-mt-24">
            <SocialStudies />
          </div>
          <div className="-mt-24">
            <Psychology />
          </div>
          <div className="-mt-24">
            <Accountancy />
          </div>
          <div className="-mt-24">
            <IncomeTax />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolCurriculum;
