import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="Summary">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="Arcade">
        <div className="Yearly">
          <div className="ArcHead">
            <p>Arcade(Yearly)</p>
            <a href="">Change</a>
          </div>
          <p>$90/yr</p>
        </div>

        <span className="Line"></span>

        <div className="Online">
          <p>Online service</p>
          <p>+$10/yr</p>
        </div>

        <div className="Large">
          <p>Larger storage</p>
          <p>+$20/yr</p>
        </div>
      </div>

      <div className="Total">
        <p>Total (per year)</p>
        <p>$120/yr</p>
      </div>

      <div className="Btn">
        {" "}
        <button>Go Back</button>
        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
