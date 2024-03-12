import React from "react";
import "./PickAdd.css";
import Pick from "./PickData";

const PickAdds = ({ item }) => (
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
        <p>{item.amount}</p>
      </div>
    </div>
  </>
);

const PickAddOns = () => {
  return (
    <div className="AddOn">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>

      <div>
        {Pick.map((item, index) => (
          <PickAdds key={index} item={item} {...item} />
        ))}
      </div>

      <div className="Btn">
        {" "}
        <button>Go Back</button>
        <button>Next Step</button>
      </div>
    </div>
  );
};

export default PickAddOns;
