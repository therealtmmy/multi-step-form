import "./App.css";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/NavContent/Info";
import ThankYou from "./Components/NavContent/ThankYou";
import SelectPlan from "./Components/NavContent/SelectPlan";
import PickAddOns from "./Components/NavContent/PickAddOns";
import Summary from "./Components/NavContent/Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [on, setOn] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Info />} />
          <Route
            path="selectPlan"
            element={<SelectPlan on={on} setOn={setOn} />}
          />
          <Route
            path="pickaddon"
            element={<PickAddOns on={on} setOn={setOn} />}
          />
          <Route path="summary" element={<Summary on={on} setOn={setOn} />} />
          <Route path="thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
