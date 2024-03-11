import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="Info">
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number.</p>

      <form action="" method="post" className="formDiv">
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder="e.g Stephen King" />

        <label htmlFor="Email Address">Email Address</label>
        <input type="email" placeholder="e.g stephenking@lorem.com" />

        <label htmlFor="Phone Number">Phone Number</label>
        <input type="text" placeholder="e.g +1 234 567 890" />
      </form>

      <button>Next Step</button>
    </div>
  );
};

export default Info;
