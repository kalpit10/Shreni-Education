import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import SubjectCard from "./side-components-schoolcurriculum/SubjectCard";
import AccountancySubject from "../images/Accountancy.png";
import English from "../images/EnglishSubject.png";
import BusinessStudies from "../images/BST.png";
import EcoImage from "../images/eco.png";
import Geo from "../images/Geography.png";
import HS from "../images/HindiSanskrit.png";
import HistorySubject from "../images/History.png";
import IncomeTaxSubject from "../images/Incometax.png";
import MathsImage from "../images/Maths.png";
import Pol from "../images/PolScience.png";
import PsychologySubject from "../images/Psychology2.png";
import SST from "../images/SST.png";

const SchoolCurriculum = () => {
  const subjects = [
    {
      img: AccountancySubject,
      subjectTitle: "Accountancy",
      classTitle: "XI - XII",
      board: "CBSE / ICSE / College-Level",
      teacher: "Piyush Kumar Tiwari",
      textColor: "text-[#c8133e]",
    },
    {
      img: English,
      subjectTitle: "English",
      classTitle: "III - XII",
      board: "CBSE / ICSE / ISC / IGCSE",
      teacher: "Navita Tewari",
      textColor: "text-[#c8133e]",
    },
    {
      img: BusinessStudies,
      subjectTitle: "Business Studies",
      classTitle: "XI - XII",
      board: "CBSE",
      teacher: "Piyush Kumar Tiwari",
      textColor: "text-[#c8133e]",
    },
    {
      img: EcoImage,
      subjectTitle: "Economics",
      classTitle: "XI - XII",
      board: "CBSE / ICSE",
      teacher: "Piyush Kumar Tiwari",
      textColor: "text-[#c8133e]",
    },
    {
      img: Geo,
      subjectTitle: "Geography",
      classTitle: "III - XII",
      board: "CBSE / ICSE / ISC / IGCSE",
      teacher: "Navita Tewari",
      textColor: "text-[#c8133e]",
    },
    {
      img: HS,
      subjectTitle: "Hindi-Sanskrit",
      classTitle: "V - X",
      board: "CBSE",
      teacher: "Vandana Swami",
      textColor: "text-[#c8133e]",
    },
    {
      img: HistorySubject,
      subjectTitle: "History",
      classTitle: "XI - XII",
      board: "CBSE / ICSE / ISC / IGCSE",
      teacher: "Navita Tewari",
      textColor: "text-[#c8133e]",
    },
    {
      img: IncomeTaxSubject,
      subjectTitle: "Income Tax",
      classTitle: "B.COM",
      teacher: "Piyush Kumar Tiwari",
      textColor: "text-[#c8133e]",
    },
    {
      img: MathsImage,
      subjectTitle: "Maths",
      classTitle: "III - X",
      board: "CBSE / ICSE / Haryana Board",
      teacher: "Piyush Kumar Tiwari",
      textColor: "text-[#c8133e]",
    },
    {
      img: Pol,
      subjectTitle: "Political Science",
      classTitle: "XI - XII",
      board: "CBSE / ICSE / ISC / IGCSE",
      teacher: "Navita Tewari",
      textColor: "text-[#c8133e]",
    },
    {
      img: PsychologySubject,
      subjectTitle: "Psychology",
      classTitle: "XI - XII",
      board: "CBSE",
      teacher: "Navita Tewari",
      textColor: "text-[#c8133e]",
    },
    {
      img: SST,
      subjectTitle: "Social Studies",
      classTitle: "IV - X",
      board: "CBSE",
      teacher: "Navita Tewari",
      textColor: "text-[#c8133e]",
    },
  ];
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
          {/* Map through all subjects and render cards */}
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              textColor={subject.textColor}
              img={subject.img}
              subjectTitle={subject.subjectTitle}
              classTitle={subject.classTitle}
              board={subject.board}
              teacher={subject.teacher}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"></div>
      </div>
      <Footer />
    </div>
  );
};

export default SchoolCurriculum;
