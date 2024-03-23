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
  const [active, setActive] = useState("true");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Sidebar active={active} setActive={setActive} />}
        >
          <Route
            index
            element={<Info active={active} setActive={setActive} />}
          />
          <Route
            path="selectPlan"
            element={
              <SelectPlan
                active={active}
                setActive={setActive}
                on={on}
                setOn={setOn}
              />
            }
          />
          <Route
            path="pickaddon"
            element={
              <PickAddOns
                active={active}
                setActive={setActive}
                on={on}
                setOn={setOn}
              />
            }
          />
          <Route
            path="summary"
            element={
              <Summary
                on={on}
                active={active}
                setActive={setActive}
                setOn={setOn}
              />
            }
          />
          <Route path="thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
