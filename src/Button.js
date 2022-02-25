import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Button = ({ index, setIndex }) => {
  return (
    <>
      <button className="prev">
        <FiChevronLeft onClick={() => setIndex(index - 1)} />
      </button>
      <button className="next">
        <FiChevronRight onClick={() => setIndex(index + 1)} />
      </button>
    </>
  );
};

export default Button;
