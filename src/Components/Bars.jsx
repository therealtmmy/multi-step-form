import React from "react";
import "./Bars.css";

const Bars = () => {
  const bars = [
    {
      number: "1",
      step: "STEP 1",
      content: "YOUR INFO",
    },

    {
      number: "2",
      step: "STEP 2",
      content: "SELECT PLAN",
    },

    {
      number: "3",
      step: "STEP 3",
      content: "ADD-ONS",
    },

    {
      number: "4",
      step: "STEP 4",
      content: "SUMMARY",
    },
  ];

  console.log(bars);
  return (
    <div className="FirstBar">
      {bars.map((value) => (
        <div className="Row">
          <p className="Number">{value.number}</p>
          <div className="Step">
            {" "}
            <p>{value.step}</p>
            <p>{value.content}</p>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default Bars;
