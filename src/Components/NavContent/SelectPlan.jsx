import React, { useState } from "react";
import "./SelectPlan.css";
import plans from "./SelectData";
import { NavLink, Link, useNavigate } from "react-router-dom";

const PlansToSelect = ({ items, on, clicked, setClicked }) => (
  <>
    {" "}
    <div className={clicked === items.id ? "RollOnclick" : "RollOne"}>
      <input
        type="checkbox"
        checked={clicked === items.id}
        onChange={() => {
          if (clicked === items.id) {
            setClicked(null);
          } else {
            setClicked(items.id);
          }
        }}
        className="PlanCheckbox"
      />{" "}
      <div className="Plans">
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
    </div>
  </>
);

const SelectPlan = ({ on, setOn }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const NextPlan = () => {
    console.log("Oluwatimilehin");
    navigate("/pickaddon");
  };

  return (
    <div className="SelectPlan">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div className="PlanRoll">
        {plans.map((items) => (
          <PlansToSelect
            key={items.id}
            on={on}
            setClicked={setClicked}
            clicked={clicked}
            items={items}
            {...items}
          />
        ))}
      </div>

      <div className="Switch">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" checked={!on} onClick={() => setOn(!on)} />
          <span className="slider"></span>
        </label>

        <p>Yearly</p>
      </div>

      <div className="Btn">
        {" "}
        <Link to="/">Go Back</Link>
        <button onClick={NextPlan}>Next Step</button>
      </div>
    </div>
  );
};

export default SelectPlan;
