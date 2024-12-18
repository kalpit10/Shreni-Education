import React from "react";

function YLECard({
  number,
  title,
  subtitle,
  description,
  listItems,
  bgColor,
  textColor,
  textColorSecondary,
}) {
  return (
    <div className="mt-12 mb-5">
      <div
        className={`p-12 pb-auto ml-auto mr-auto w-11/12 ${bgColor} lg:pb-20 xl:pb-24`}
      >
        <h1 className={`font-bold text-${textColor} text-4xl -mt-5 text-left`}>
          {number}
        </h1>

        <hr className={`bg-${textColor} -ml-3 pb-0.5`} />
        <div>
          <h2
            className={`text-${textColorSecondary} text-lg whitespace-nowrap -ml-3 mt-3 font-semibold font-serif`}
          >
            {title}
          </h2>
          <p className={`text-${textColorSecondary} -ml-3 mt-2`}>
            <span className="font-bold">{title}</span> <span>{subtitle}</span>
          </p>

          <p className={`text-${textColorSecondary} -ml-3 mt-5`}>
            {description}
          </p>
          <ol className={`mt-2 text-${textColorSecondary}`}>
            {listItems.map((item, index) => (
              <li key={index}>– {item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default YLECard;
