import { Images } from "./Constant";
import React, { useEffect, useState } from "react";
const ImageSlider = () => {
  const [slide, setSlide] = useState(0);
  const handlePrevious = () => {
    setSlide(!slide ? Images.length - 1 : slide - 1);
  };
  const handleNext = () => {
    setSlide((slide + 1) % Images.length);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [slide]);
  
  return (
    <div>
      <div className="flex justify-center mt-2">
        <button className="text-lg me-2" onClick={handlePrevious}>
          Previous
        </button>
        {Images.map((url, i) => (
          <img
            src={url}
            alt="carousel"
            className={
              "w-[650px] h-[400px] object-cover " +
              (slide === i ? "block" : "hidden")
            }
            key={url}
          />
        ))}
        <button className=" text-lg ml-3" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
