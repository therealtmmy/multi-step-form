import React from "react";
import "./SelectPlan.css";
import plans from "./SelectData";

const PlansToSelect = ({ items }) => (
  <>
    {" "}
    <div className="RollOne">
      {" "}
      <div dangerouslySetInnerHTML={{ __html: items.svg }} />
      <div className="RollContent">
        <p>{items.plan}</p>
        <p>{items.year}</p>
        <p>{items.month}</p>
      </div>
    </div>
  </>
);

const SelectPlan = () => {
  return (
    <div className="SelectPlan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div className="PlanRoll">
        {plans.map((items, index) => (
          <PlansToSelect key={index} items={items} {...items} />
        ))}
      </div>

      <div className="Switch">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>

        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SelectPlan;
