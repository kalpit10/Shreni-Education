import React from "react";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SE3 from "../images/SE3.png";
import SE2 from "../images/SE2.png";
import SE1 from "../images/SE1.png";
import ExamList from "./side-components-SE/ExamList";

function SE() {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          className="text-center my-8 mt-5 text-4xl font-bold text-[#2e3192]"
        >
          Standardised Exams
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          align="justify"
          className="mb-8 text-lg text-[#333333] md:w-7/12 mx-auto"
        >
          Shreni excels in training students for standardized exams such as
          IELTS, GMAT, and SAT. We follow a three-phase approach: discussing
          tasks, developing accuracy, and fine-tuning skills to ensure success.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4 md:pb-12 2xl:pb-36">
        <div>
          <ExamList
            img={SE1}
            title="IELTS (International English Language Testing System)"
            subtitle="IELTS"
            description=" exam is for those who either wish to study further or work abroad. It is a requirement for proving your proficiency in english all around the world."
            linkExamWebsite="https://www.ielts.org"
          />{" "}
        </div>
        <div>
          <ExamList
            img={SE2}
            title="GMAT (Graduate Management Admission Test)"
            subtitle="GMAT"
            subject="*We teach only English"
            description="measures your command of basic arithmetic, algebra, geometry, multi-source data analysis, and grammar. More importantly, it measures your ability to analyze and evaluate written material, think critically and solve problems."
            linkExamWebsite="https://www.mba.com/exams/gmat-exam"
          />{" "}
        </div>
        <div>
          <ExamList
            img={SE3}
            title="SAT (Scholastic Assessment Test)"
            subtitle="SAT"
            subject="*We teach only English"
            description="is a standardized test widely used for college admissions in the United States. The exam has four sections: Reading, Writing, Language and Math."
            linkExamWebsite="https://satsuite.collegeboard.org/sat"
          />{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SE;
