import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1 className="text-center  text-3xl">Carousel  {value}</h1>
    </div>
  );
};

export default Header;
