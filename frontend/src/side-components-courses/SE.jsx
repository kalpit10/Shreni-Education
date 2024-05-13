import React from "react";
import { Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IELTS from "./side-components-SE/IELTS";
import GMAT from "./side-components-SE/GMAT";
import SAT from "./side-components-SE/SAT";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4 md:pb-12">
        <div>
          <IELTS />
        </div>
        <div>
          <GMAT />
        </div>
        <div>
          <SAT />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SE;
