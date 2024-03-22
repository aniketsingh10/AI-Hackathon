import React from "react";
import Img from "../../assets/images/pms.webp";

const Details = () => {
  return (
    <div className="text-black flex justify-center items-center h-screen bg-white">
      <div className="max-w-[98%] w-full mx-auto  text-center py-auto">
        <picture>
          <source srcSet={Img} type="image/webp" />
          <img
            src={Img}
            width={600}
            height={600}
            alt="Description of the images"
            className="mx-auto" // Center the image horizontally
          />
        </picture>
        <div className="flex flex-col items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ">
            Grow with PMS
          </p>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Monitor your data analytics to increase revenue for stocks,
            investments, & portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
