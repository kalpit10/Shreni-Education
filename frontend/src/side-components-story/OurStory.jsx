import React from "react";
import { FaUniversity, FaUserGraduate, FaBook } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const OurStory = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
            Our Journey
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 hover:cursor-move">
            <Tilt
              className="parallax-effect"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              {/* Timeline Item 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500 rounded-full p-3">
                    <FaUniversity className="text-white text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Founded
                    </h3>
                    <p className="text-gray-500">25 May 2013</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Shreni Education was founded on 25 May 2013 as the{" "}
                  <span className="font-bold">
                    first Authorised Enrollment Centre{" "}
                  </span>
                  for preparing candidates for the{" "}
                  <span className="font-bold">Cambridge English Exams</span>{" "}
                  conducted by Cambridge Language Assessment (formerly known as
                  Cambridge ESOL) for all the levels viz{" "}
                  <span className="font-bold"> A1 – C2</span> along with
                  <span className="font-bold">
                    {" "}
                    Business English Certificate (BEC)
                  </span>{" "}
                  at all the three levels –{" "}
                  <span className="font-bold">
                    Preliminary, Vantage and Higher, Teaching Knowledge Test
                    (TKT){" "}
                  </span>
                  all the modules; with a vision to impart quality and
                  affordable education to the students of Faridabad.
                </p>
              </div>
            </Tilt>
            <Tilt
              className="parallax-effect"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              {/* Timeline Item 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500 rounded-full p-3">
                    <FaUserGraduate className="text-white text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Students
                    </h3>
                    <p className="text-gray-500">100+ annual enrollments</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Having started with just 16 students, it has now grown over
                  the years with more than an average of hundred new enrollments
                  annually.Initially, also catering to the neighbourhood needs
                  of school curriculum across{" "}
                  <span className="font-bold">
                    {" "}
                    CBSE, ICSE, ISC and Haryana Board;{" "}
                  </span>
                  it has gradually and steadily grown in terms of the Shrenite
                  population – employees and students as well as in the courses
                  offered and the area it now covers.
                </p>
              </div>
            </Tilt>
            <Tilt
              className="parallax-effect"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              {/* Timeline Item 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-500 rounded-full p-3">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Comprehensive Curriculum
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600">
                  On popular demand, Shreni Education started teaching{" "}
                  <span className="font-bold">
                    {" "}
                    IELTS, TOEFL, SAT, GMAT, GRE, and PTE (only English),{" "}
                  </span>{" "}
                  in 2014. Each course comes with proper lesson plans tailored
                  to meet individual requirements.At Shreni Education, we offer
                  comprehensive education solutions beyond language training.
                  Our students not only excel in English but also in{" "}
                  <span className="font-bold">
                    {" "}
                    school curriculum subjects up to Class XII.
                  </span>{" "}
                  We also provide specialized courses in{" "}
                  <span className="font-bold">
                    {" "}
                    Accountancy, Business Studies, Economics, B.Com., and Income
                    Tax
                  </span>{" "}
                  for senior students.
                </p>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
