import React, { useState } from "react";
import "./Info.css";

const Info = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const Next = () => {
    console.log(`${info}`);
  };

  return (
    <div className="Info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number.</p>

      <form action="" method="post" className="formDiv">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          placeholder="e.g Stephen King"
        />

        <label htmlFor="Email Address">Email Address</label>
        <input
          type="email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.email })}
          placeholder="e.g stephenking@lorem.com"
        />

        <label htmlFor="Phone Number">Phone Number</label>
        <input
          type="text"
          value={info.phoneNumber}
          onChange={(e) => setInfo({ ...info, phoneNumber: e.target.value })}
          placeholder="e.g +1 234 567 890"
        />
      </form>

      <button onClick={Next}>Next Step</button>
    </div>
  );
};

export default Info;
