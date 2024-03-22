import React, { useState } from "react";
import "./SelectPlan.css";
import plans from "./SelectData";
import { NavLink, Link } from "react-router-dom";

const PlansToSelect = ({ items, on }) => (
  <>
    {" "}
    <div className="RollOne">
      {" "}
      <div dangerouslySetInnerHTML={{ __html: items.svg }} />
      <div className="RollContent">
        <p>{items.plan}</p>

        {on ? (
          <p>{items.month}</p>
        ) : (
          <div className="YearContent">
            {" "}
            <p>{items.year}</p>
            <p>{items.months}</p>
          </div>
        )}
      </div>
    </div>
  </>
);

const SelectPlan = () => {
  const [on, setOn] = useState(true);

  const switchBtn = () => {
    setOn(!on);
    console.log(on);
  };

  return (
    <div className="SelectPlan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div className="PlanRoll">
        {plans.map((items, index) => (
          // <PlansToSelect key={index} items={items} {...items} />
          <NavLink
            id="RollNav"
            to="/selectPlan"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? " #eaeaeb" : "red" };
            }}
            key={index}
          >
            <PlansToSelect items={items} on={on} {...items} />
          </NavLink>
        ))}
      </div>

      <div className="Switch">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" onClick={switchBtn} />
          <span className="slider"></span>
        </label>

        <p>Yearly</p>
      </div>

      <div className="Btn">
        {" "}
        <Link to="/">Go Back</Link>
        <Link>Next Step</Link>
      </div>
    </div>
  );
};

export default SelectPlan;
