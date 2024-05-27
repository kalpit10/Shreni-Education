import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import WelcomeImage from "../images/Welc.png";
import TypeWriter from "typewriter-effect";
import "../stylesheet/Home.css";

function HomeWelcome() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden md:w-11/12 md:mx-auto"
      ref={ref}
    >
      <div className="flex flex-col md:flex-row border bg-red-700 p-56 md:rounded-3xl overflow-hidden position">
        <div
          className="absolute inset-0 bg-no-repeat bg-center h-full mt-56 md:mt-60"
          style={{
            backgroundImage: `url(${WelcomeImage})`,
          }}
        ></div>
      </div>
      <div className="md:w-1/2"></div>{" "}
      {/* Empty div to maintain aspect ratio */}
      <motion.div className="absolute inset-0 flex flex-col justify-center items-center px-8">
        <motion.span
          className="text-3xl md:text-5xl font-extrabold text-[#f3eded] text-center -mt-44 position-text"
          style={{
            textShadow: `
              -1px -1px 0 #000000,  
              1px -1px 0 #000000,
              -1px 1px 0 #000000, 
              1px 1px 0 #000000
            `,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Personalised Classes,
          <br />
          Right Guidance, Desired Results!
        </motion.span>
        <motion.div
          className="typewriter-effect my-3 mr-3 font-bold text-xl md:text-2xl w-full text-[#ffc107] text-center position-text"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TypeWriter
            options={{
              strings: [
                "#CBSE-ICSE-ISC-IGCSE",
                "#PrepareForCambridgeEnglishExams",
                "#IELTSCoaching",
                "#SchoolCurriculum[I-XII]",
                "#SAT-GMAT[ENGLISH]",
              ],
              delay: 70,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              onStart: (self) => {
                self.options.strings = self.options.strings.map(
                  (str) => `#${str}`
                );
              },
              onStringTyped: (arrayPos, self) => {
                const str = self.strings[arrayPos].substring(1); // Remove #
                self.cursor.remove();
                self
                  .typeString(str)
                  .callFunction(() => {
                    self.cursor.add();
                  })
                  .start();
              },
            }}
          />
        </motion.div>

        {/* <motion.div
          className="relative text-left md:text-center w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Additional content can be added here */}
        {/* </motion.div> */}
      </motion.div>
    </motion.div>
  );
}

export default HomeWelcome;
