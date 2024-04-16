import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import WelcomeImage from "../images/WelcomeImage.jpeg";
import TypeWriter from "typewriter-effect";

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
    <div className="relative" ref={ref}>
      <img
        className="opacity-50 h-screen object-cover md:w-full"
        src={WelcomeImage}
        alt="Welcome To Shreni Education"
      />
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex flex-col justify-center items-center px-8"
      >
        <motion.span
          className="text-5xl font-extrabold text-center text-[#333434] mb-3"
          style={{
            textShadow: `
            -1px -1px 0 #f0f0f0,  
            1px -1px 0 #f0f0f0,
            -1px 1px 0 #f0f0f0,
            1px 1px 0 #f0f0f0
          `,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Welcome To <br />
          Shreni <br />
          Education
        </motion.span>
        <motion.div
          className="typewriter-effect my-3 font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TypeWriter
            onInit={(typewriter) => {
              typewriter.typeString("Come, explore the world with us!").start();
            }}
            options={{
              delay: 70,
              autoStart: true,
              loop: false,
            }}
          />
        </motion.div>

        <motion.button
          className="relative overflow-hidden bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-red-500 hover:text-blue-500"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="absolute inset-y-0 left-0 w-1/2 bg-blue-600 origin-left transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
          <span className="absolute inset-y-0 right-0 w-1/2 bg-blue-600 origin-right transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
          <span className="relative z-10">Apply Here!</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HomeWelcome;
