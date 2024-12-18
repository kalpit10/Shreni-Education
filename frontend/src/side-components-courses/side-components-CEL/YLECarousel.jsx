import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S1 from "../../images/s1.png";
import S2 from "../../images/s2.png";
import S3 from "../../images/s3.png";
import S4 from "../../images/s4.png";
import S5 from "../../images/s5.png";

const data = [
  {
    img: S1,
  },
  {
    img: S2,
  },
  {
    img: S3,
  },
  {
    img: S4,
  },
  {
    img: S5,
  },
];

function YLECarousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="bg-dark_purple text-white">
      <div className="text-center py-10">
        <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
          Unlock Higher Language Potential.{" "}
        </h1>
        <div className="mt-20 mx-9 cursor-grabbing">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="mx-auto gap-8 group">
                <div className="mix-blend-luminosity mx-6">
                  <img
                    className="w-full h-48 md:h-full md:w-6/12 mx-auto"
                    src={d.img}
                    alt=""
                    loading="lazy"
                  ></img>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default YLECarousel;
