import "./App.css";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/NavContent/Info";
import ThankYou from "./Components/NavContent/ThankYou";
import SelectPlan from "./Components/NavContent/SelectPlan";
import PickAddOns from "./Components/NavContent/PickAddOns";
import Summary from "./Components/NavContent/Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Sidebar />}>
    //       <Route index element={<Info />} />
    //       <Route path="selectPlan" element={<SelectPlan />} />
    //       <Route path="pickaddon" element={<PickAddOns />} />
    //       <Route path="summary" element={<Summary />} />
    //       <Route path="thankyou" element={<ThankYou />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    <>
      <div>
        <Sidebar />

        {/* <Info /> */}
        {/* <SelectPlan /> */}
        {/* <PickAddOns /> */}
        {/* <Summary /> */}
        {/* <ThankYou /> */}
      </div>
    </>
  );
}

export default App;
