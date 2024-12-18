import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Director from "../images/Director.png";
import "../stylesheet/Home.css";
import HorizontalLine from "./HorizontalLine";

function DirectorMessage() {
  // State to track whether animation has occurred
  const [isVisible, setIsVisible] = useState(false);
  // Framer Motion controls for animation
  // const controls = useAnimation();
  // React Intersection Observer hook to detect when component is in view
  // We create a ref using the useRef hook to refer to the DOM element of the component.
  const ref = useRef(null);

  useEffect(() => {
    // we set up an Intersection Observer. This observer monitors changes in visibility of the component.
    // When the component enters or leaves the viewport, the entries array passed to the observer's callback contains information about these changes.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // it means the component is in view, so we set isVisible state to true
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(ref.current);

    // We then return a cleanup function in the useEffect hook to disconnect the observer when the component is unmounted.
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200 md:border-b-0 md:border-none">
            <h1 className="text-3xl font-bold text-gray-800 text-center md:text-4xl">
              Director's Message
            </h1>
            <div className="relative">
              <HorizontalLine />
            </div>
          </div>

          {/* Director's Photo */}
          <div className="flex flex-col xl:flex-row bg-white w-full md:w-1/2 md:mx-auto rounded-lg p-4 md:p-8 lg:p-12 xl:p-16 shadow-lg min-w-0 2xl:w-6/12">
            <div className="md:w-1/2 md:mr-8 md:pl-16 lg:pl-32 xl:pl-0">
              <div className="w-full md:w-60">
                <img
                  src={Director}
                  alt="Director"
                  className="w-full h-60 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Director's Name */}
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">Director Academics</p>
              <h2 className="text-2xl font-bold mb-2">Navita Tewari</h2>
              {/* Director's Message */}
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                <p className="text-gray-700">
                  Shreni has been established with a crystal clear vision of
                  nurturing the inner attributes of individual students. We want
                  to extend a helping hand for our students to hold, trust and
                  look up to for guidance. It is a place to nurture
                  unconditional love, affection, responsibility and belief in
                  oneself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DirectorMessage;
