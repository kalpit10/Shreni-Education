import React from "react";
import Memory4 from "../images/Memory1.jpg";
import Memory2 from "../images/Memory2.jpg";
import Memory3 from "../images/memory3.jpg";
import Memory1 from "../images/memory4.jpg";
import Carousel from "./Carousel";
import "../stylesheet/Home.css";
import HorizontalLine from "./HorizontalLine";

function HomeCarousel() {
  const slides = [Memory1, Memory2, Memory3, Memory4];

  return (
    <div style={{}}>
      <div className="text-center text-4xl my-6">
        <span>HIGHLIGHTS</span>
      </div>
      <div className="relative">
        <HorizontalLine />
      </div>

      <div className="max-w-lg mx-auto mb-8 w-80 md:w-9/12">
        <Carousel autoSlide={true}>
          {slides.map((s) => (
            <img src={s} alt="" key={s} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousel;
