import "./App.css";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/NavContent/Info";
import ThankYou from "./Components/NavContent/ThankYou";
import SelectPlan from "./Components/NavContent/SelectPlan";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Sidebar />
        {/* <Info /> */}
        {/* <ThankYou /> */}
        <SelectPlan />
      </div>
    </div>
  );
}

export default App;
