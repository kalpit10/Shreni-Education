import React from "react";
import Memory1 from "../images/Memory1.jpg";
import Memory2 from "../images/Memory2.jpg";
import Memory3 from "../images/memory3.jpg";
import Memory4 from "../images/memory4.jpg";
import Carousel from "./Carousel";
import "../stylesheet/Home.css";

function HomeCarousel() {
  const slides = [Memory1, Memory2, Memory3, Memory4];

  return (
    <div style={{}}>
      <div className="text-center text-4xl my-6">
        <span>MEMORIES</span>
      </div>
      <div className="relative">
        <hr
          className="flex w-1/3 mx-auto h-0.5 my-3 border-0 rounded md:h-0.5 md:w-1/6 xl:w-1/12"
          style={{ backgroundColor: "#2e3192" }}
        />
        <div
          className="absolute left-1/2 animate-slide rounded"
          style={{
            width: "30px", // Adjust width of the sliding box
            height: "5px", // Adjust height of the sliding box
            backgroundColor: "#d1143e", // Adjust background color of the sliding box
            top: "170%", // Center vertically
            marginTop: "-5px", // Adjust to half of sliding box height
          }}
        />
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
