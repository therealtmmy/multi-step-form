import "./App.css";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/NavContent/Info";
import ThankYou from "./Components/NavContent/ThankYou";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Sidebar />
        {/* <Info /> */}
        <ThankYou />
      </div>
    </div>
  );
}

export default App;
