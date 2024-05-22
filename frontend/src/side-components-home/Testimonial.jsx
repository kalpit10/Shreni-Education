import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheet/Home.css";
import Testimonial1 from "../images/Testimonial1.png";
import Testimonial2 from "../images/Testimonial2.png";
import Testimonial3 from "../images/Testimonial3.png";
import Testimonial4 from "../images/Testimonial4.png";
import Testimonial5 from "../images/Testimonial5.png";
import Testimonial6 from "../images/Testimonial6.png";
import Testimonial7 from "../images/Testimonial7.png";
import Testimonial8 from "../images/Testimonial8.png";
import Testimonial9 from "../images/Testimonial9.png";
import Testimonial10 from "../images/Testimonial10.png";
import Testimonial11 from "../images/Testimonial11.png";
import Testimonial12 from "../images/Testimonial12.png";

const data = [
  {
    name: "Prabha Rajagopalan",
    img: Testimonial1,
    review:
      "My experience at Shreni was extremely enriching. Navita mam's teaching skills as well as the practice material provided by her helped me score well in IELTS. I'm extremely grateful.",
    course: "IELTS Band - 8.5",
  },
  {
    name: "Trisha Verma",
    img: Testimonial2,
    review:
      "Thank you Shreni for always being there! I know I can walk-in for life and discuss my way through all the problems. The courses have definitely helped me communicate better.",
    course:
      "School Curriculum - English, A2 Key, B1 Preliminary, B2 First and C1 Advanced",
  },
  {
    name: "Mayank Baghoria",
    img: Testimonial3,
    review:
      "It was a pleasure attending C1 Advanced classes at Shreni. The program provided comprehensive grammar and vocabulary worksheets, ample practice of sample papers, and exam format. This enhanced my knowledge and confidence, helping me obtain a lifetime qualification recognized by universities worldwide and visa authorities. Unlike IELTS, C1 Advanced doesn't expire and is accepted by over 20,000 organizations globally.",
    course: "C1 Advanced",
  },
  {
    name: "Ojasvi Bharmi",
    img: Testimonial4,
    review:
      "Learning a language has unexpectedly transformed my daily life. Since completing the course, I've noticed significant improvements in my English scores and spoken English skills. The unique and practical teaching technique boosted my confidence to converse in English, a skill I lacked before. I'm thankful to Shreni for enhancing my language skills and overall confidence.",
    course: "C1 Advanced",
  },
  {
    name: "Rahul Ranjan",
    img: Testimonial5,
    review:
      "C1 Advanced score doesn't expire unlike IELTS and TOEFL, hence I used it after 4 years to satisfy the English language proficiency criteria of European university.",
    course: "C1 Advanced",
  },
  {
    name: "Arshya Loomba",
    img: Testimonial6,
    review:
      "Shreni is an inspirational institution that makes students excel in whatever they aspire. Concepts well explained & thoroughly guided answer writing techniques helped improving my scores exceptionally.",
    course: "School Curriculum - English(Online)",
  },
  {
    name: "Pavandeep Kaur",
    img: Testimonial7,
    review:
      "Very friendly environment. Teachers are very supportive and always ready to help students. At Shreni, I found realistic, honest and objective oriented approach that they followed.",
    course: "IELTS Band - 6.5",
  },
  {
    name: "Nikita Singh",
    img: Testimonial8,
    review:
      "Shreni unlike other institutes has a really friendly atmosphere which makes it easy and fun for children to learn. Teachers are extremely supportive and kind specially Navita Ma'am, she is one of the best teachers I've studied from so far.",
    course:
      "School Curriculum - English, Accounts, Maths, Social Studies and Science",
  },
  {
    name: "Chavi Madan",
    img: Testimonial9,
    review:
      "Navita ma'am's nurturing teaching style made learning comfortable and enjoyable. Despite the challenges of returning to studies after a long break, her guidance and expertise were invaluable. Thanks to her, I achieved a great score, allowing my husband and me to pursue our dreams. I'm grateful for Shreni's support and hope others benefit from their teaching.",
    course: "IELTS Band - 7.5",
  },
  {
    name: "Parul Chaudhary",
    img: Testimonial10,
    review:
      "I studied IELTS for my PR application and at Shreni Education I got proper guidance on how to study to get required scores and how to direct your efforts to make things achievable.",
    course: "IELTS Band - 7",
  },
  {
    name: "Nippun Dudeja",
    img: Testimonial11,
    review:
      "Shreni provided me with an excellent support for my IELTS study and beyond. They prepare you for the next step in your life by providing matchless academic service and personal advice.",
    course: "IELTS Band - 7.5",
  },
  {
    name: "Kalpit Swami",
    img: Testimonial12,
    review:
      "Navita Ma'am is an exceptional English teacher. Her friendly demeanor and insightful guidance during my English and IELTS studies created a comforting learning environment, devoid of any professional stiffness. Highly recommended!",
    course: "School-Curriculum - English, IELTS Band - 7",
  },
];

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-dark_purple text-white">
      <div className="text-center py-10">
        <h5 className="text-heading_color">Testimonials</h5>
        <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
          Read What Others Have to Say!{" "}
        </h1>
        <div className="mt-20 mx-9 cursor-pointer">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="mx-auto gap-8 group">
                <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] duration-500 p-8 rounded-xl mix-blend-luminosity mx-6">
                  <img className="h-44 mx-auto" src={d.img} alt=""></img>
                </div>
                <div className="text-sm leading-7 my-3 font-light opacity-50">
                  <p className="uppercase text-xl font-bold">{d.name}</p>
                  <p className="font-semibold">{d.course}</p>
                  <p className="md:w-3/4 md:mx-auto md:p-4">{d.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
