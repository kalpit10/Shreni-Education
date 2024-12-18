import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function StudentCount() {
  // State to keep track of whether the counters have already started
  const [hasStarted, setHasStarted] = useState(false);

  // Data for counts and years
  const data = [
    { year: "2013-14", value: 16 },
    { year: "2014-15", value: 75 },
    { year: "2015-16", value: 140 },
    { year: "2016-17", value: 210 },
    { year: "2017-18", value: 430 },
    { year: "2018-19", value: 554 },
    { year: "2019-20", value: 667 },
    { year: "2020-21", value: 850 },
    { year: "2021-24", value: 1142 },
  ];

  return (
    <div>
      <div className="text-center">
        <span className="text-xl font-bold">Our Growth Over the Years</span>
        <div className="mt-4">
          <span className="text-lg font-semibold">
            No. of new students enrolled from 2013-2024
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4 mb-5 ml-3 mr-3">
          {data.map((item, index) => (
            <VisibilitySensor
              key={index}
              onChange={(isVisible) => {
                if (isVisible && !hasStarted) {
                  setHasStarted(true); // Ensure the counter starts only once
                }
              }}
              partialVisibility
              delayedCall
            >
              {({ isVisible }) => (
                <div className="border p-4 rounded-lg">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={3}
                    separator=","
                    startOnMount={false}
                  >
                    {({ countUpRef, start }) => {
                      if (isVisible && hasStarted) {
                        start(); // Trigger the counter when visible and `hasStarted` is true
                      }
                      return (
                        <span
                          ref={countUpRef}
                          className="text-3xl font-bold text-red-500"
                        ></span>
                      );
                    }}
                  </CountUp>
                  <span className="block mt-2 text-sm font-semibold whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
              )}
            </VisibilitySensor>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentCount;
