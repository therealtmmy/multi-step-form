import React from "react";
import "./PickAdd.css";
import Pick from "./PickData";
import { Link, useNavigate } from "react-router-dom";

const PickAdds = ({ item, on }) => (
  <>
    <div className="Pick">
      <div className="Service">
        <input type="checkbox" className="Checkbox" />

        <div className=" ServeBox">
          <p>{item.online}</p>
          <p>{item.access}</p>
        </div>
      </div>

      <div className="Amount">
        {on ? <p>{item.mon}</p> : <p>{item.amount}</p>}
      </div>
    </div>
  </>
);

const PickAddOns = ({ on, setOn }) => {
  const navigate = useNavigate();
  const PickAddNext = () => {
    navigate("/summary");
  };

  return (
    <div className="AddOn">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>

      <div>
        {Pick.map((item, index) => (
          <PickAdds key={index} item={item} on={on} {...item} />
        ))}
      </div>

      <div className="Btn">
        {" "}
        <Link to="/selectPlan">Go Back</Link>
        <button onClick={PickAddNext}>Next Step</button>
      </div>
    </div>
  );
};

export default PickAddOns;
