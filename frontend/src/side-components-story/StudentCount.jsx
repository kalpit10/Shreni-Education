import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function StudentCount() {
  return (
    <div>
      <div className="text-center">
        <span className="text-xl font-bold">Our Growth Over the Years</span>
        <div className="mt-4">
          <span className="text-lg font-semibold">
            No. of new students enrolled from 2013-2023
          </span>
        </div>
        {/* <VisibilitySensor onChange={(isVisible) => setIsVisible(true)}> */}

        <div className="grid grid-cols-3 gap-4 mt-4 mb-5 ml-3 mr-3">
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={16}
                  duration={3}
                  separator=","
                  redraw={true}
                  startOnMount={isVisible}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2013-14
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2014-15 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={75}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2014-15
                </span>
              </div>
            )}
          </VisibilitySensor>

          {/* 2015-16 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={140}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2015-16
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2016-17 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={210}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2016-17
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2017-18 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={430}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2017-18
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2018-19 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={554}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2018-19
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2019-20 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={667}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2019-20
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2020-21 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={850}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2020-21
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* 2021-23 */}
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="border p-4 rounded-lg">
                <CountUp
                  start={0}
                  end={1000}
                  duration={3}
                  separator=","
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <span
                      ref={countUpRef}
                      className="text-3xl font-bold text-red-500"
                    ></span>
                  )}
                </CountUp>
                <span className="block mt-2 text-sm font-semibold">
                  2021-23
                </span>
              </div>
            )}
          </VisibilitySensor>
          {/* You can continue the same pattern for other years */}
        </div>
        {/* </VisibilitySensor> */}
      </div>
    </div>
  );
}

export default StudentCount;
