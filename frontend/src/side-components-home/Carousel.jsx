import React, { useEffect, useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);
  function left() {
    //left arrow
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }
  function right() {
    //right arrow
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(right, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        // curr * 100% as if the slide is on 0 it will stay on 0, when we hit right or left if it is 1 on left then it will translate left 100%, if it is slide 2 it will translate left 200%
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
          onClick={left}
        >
          <IoIosArrowDropleftCircle size={40} />
        </button>
        <button
          className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white"
          onClick={right}
        >
          <IoIosArrowDroprightCircle size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 cursor-pointer">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
              onClick={() => setCurr(i)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
