import React from "react";
import "./Summary.css";
import { Link, useNavigate } from "react-router-dom";

const Summary = ({ on }) => {
  const navigate = useNavigate();
  return (
    <div className="Summary">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="Arcade">
        <div className="Yearly">
          <div className="ArcHead">
            <p>Arcade(Yearly)</p>
            <a href="/selectPlan">Change</a>
          </div>
          <p>$90/yr</p>
        </div>

        <span className="Line"></span>

        <div className="Online">
          <p>Online service</p>
          {on ? <p>+$1/mo</p> : <p>+$10/yr</p>}
        </div>

        <div className="Large">
          <p>Larger storage</p>
          {on ? <p>+$2/mo</p> : <p>+$20/yr</p>}
        </div>

        <div className="Custom">
          <p>Customizable Profile</p>
          {on ? <p>+$2/mo</p> : <p>+$20/yr</p>}
        </div>
      </div>

      <div className="Total">
        <p>Total (per year)</p>
        <p>$120/yr</p>
      </div>

      <div className="Btn">
        {" "}
        <Link to="/pickaddon">Go Back</Link>
        <button onClick={() => navigate("/thankyou")}>Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
