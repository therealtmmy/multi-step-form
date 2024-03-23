import React, { useState } from "react";
import "./PickAdd.css";
import Pick from "./PickData";
import { Link, useNavigate } from "react-router-dom";

const PickAdds = ({ item, on, isPicked, setIsPicked }) => (
  <>
    <div className={isPicked.includes(item.id) === item.id ? "Picked" : "Pick"}>
      <div className="Service">
        <input
          type="checkbox"
          className="Checkbox"
          checked={isPicked.includes(item.id)}
          onChange={() => {
            const updatedCheckboxes = isPicked.includes(item.id)
              ? isPicked.filter((id) => id !== item.id) // Uncheck if already active
              : [...isPicked, item.id]; // Check if not active

            setIsPicked(updatedCheckboxes);
          }}
        />

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
  const [isPicked, setIsPicked] = useState([]);

  const navigate = useNavigate();
  const PickAddNext = () => {
    navigate("/summary");
  };

  return (
    <div className="AddOn">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>

      <div>
        {Pick.map((item) => (
          <PickAdds
            key={item.id}
            item={item}
            isPicked={isPicked}
            setIsPicked={setIsPicked}
            on={on}
            {...item}
          />
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
