import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import WhyYLE from "./side-components-CEL/WhyYLE";
import YLECard from "./side-components-CEL/YLECard";
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
      </div>
      <WhyYLE />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <YLECard
          number="01"
          title="Pre A1 Starters (YLE Starters)"
          subtitle="is the first of three Cambridge English Qualifications designed for young learners."
          description="This course can help your child take their first step towards:"
          listItems={[
            "Understanding basic English on the internet.",
            "Enjoying books, songs, TV, and films in English.",
            "Making friends globally",
          ]}
          bgColor="bg-[#c8133e]"
          textColor="[#ffffff]"
          textColorSecondary="[#fffdf6]"
        />

        <YLECard
          number="02"
          title="A1 Movers (YLE Movers)"
          subtitle="is the second of three Cambridge English Qualifications designed for young learners."
          description="This course can help your child:"
          listItems={[
            "Understand instructions or converse.",
            "Understand notices, instructions, or information.",
            "Complete forms and write notes, including times and dates.",
          ]}
          bgColor="bg-[#ffffff]"
          textColor="[#c8133e]"
          textColorSecondary="[#c8133e]"
        />

        <YLECard
          number="03"
          title="A2 Flyers (YLE Flyers)"
          subtitle="is the third of three Cambridge English Qualifications designed for young learners."
          description="This course can help your child:"
          listItems={[
            "Communicate in familiar situations",
            "Understand simple written English",
            "Use basic phrases and expressions.",
            "Interact with English speakers who speak clearly.",
          ]}
          bgColor="bg-[#c8133e]"
          textColor="[#ffffff]"
          textColorSecondary="[#fffdf6]"
        />
      </div>
      <div className="mt-5">
        <YLECarousel />
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-bold underline text-center font-serif lg:mb-12">
          Levels A2 to C1
        </h1>
      </div>
      <div className="lg:-mt-12 grid grid-cols-1 lg:grid-cols-2">
        <YLECard
          number="04"
          title="A2 Key (KET)"
          subtitle="is a basic level qualification that shows you can use English to communicate in simple situations and have achieved a good foundation in learning English."
          description="This course can help your child:"
          listItems={[
            "Understand simple questions and instructions",
            "Express simple opinions and needs",
            "Complete forms and write simple letters or postcards.",
          ]}
          bgColor="bg-[#ffffff]"
          textColor="[#c8133e]"
          textColorSecondary="[#c8133e]"
        />

        <YLECard
          number="05"
          title="B1 Preliminary (PET)"
          subtitle="is an intermediate level qualification in English that opens the doors to opportunities for work, study and travel abroad."
          description="This course can help your child:"
          listItems={[
            "Understand main points of instructions and announcements.",
            "Understand instructions in class and homework given by a teacher or lecturer",
            "Ask simple questions and join conversations in study settings.",
            "Write a description of an event, for example, a school trip",
          ]}
          bgColor="bg-[#c8133e]"
          textColor="[#ffffff]"
          textColorSecondary="[#fffdf6]"
        />

        <YLECard
          number="06"
          title="A2 Key (KET)"
          subtitle="is a basic level qualification that shows you can use English to communicate in simple situations and have achieved a good foundation in learning English."
          description="This course can help your child:"
          listItems={[
            "Understand the main idea of complex pieces of writing",
            "Engage in conversations on various topics, expressing opinions and arguments.",
            "Write clearly, expressing opinions and explaining pros and cons of different views.",
          ]}
          bgColor="bg-[#ffffff]"
          textColor="[#c8133e]"
          textColorSecondary="[#c8133e]"
        />

        <YLECard
          number="07"
          title="A2 Key (KET)"
          subtitle="is a basic level qualification that shows you can use English to communicate in simple situations and have achieved a good foundation in learning English."
          description="This course can help your child:"
          listItems={[
            "Show English proficiency for academic and professional settings.",
            "Follow any academic course at university level",
            "Communicate effectively at managerial and professional levels",
            "Participate confidently in meetings or seminars.",
            "Carry out complex and challenging research",
          ]}
          bgColor="bg-[#c8133e]"
          textColor="[#ffffff]"
          textColorSecondary="[#fffdf6]"
        />
      </div>
      <Footer />
    </div>
  );
}

export default CEL;
