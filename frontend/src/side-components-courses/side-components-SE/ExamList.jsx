import React from "react";

function ExamList({
  img,
  title,
  subtitle,
  description,
  subject,
  linkExamWebsite,
}) {
  const linkClick = () => {
    // Open the link in a new tab
    window.open(linkExamWebsite, "_blank");
  };
  return (
    <div className="mt-12">
      <div className="container">
        <img src={img} alt="IELTS" className="h-52" loading="lazy" />
        <h1 className="text-2xl font-bold font-serif mt-4 mx-auto w-11/12">
          {title}
        </h1>
        <p className="mt-4 w-11/12 mx-auto">
          The <span className="font-bold">{subtitle}</span> {description} <br />
          <br />
          <span className="font-semibold">{subject}</span>
        </p>
        <div className="flex text-center pb-8 mt-4">
          <button className="classy-button-cur mx-auto" onClick={linkClick}>
            Official Website
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamList;
