import "./App.css";
import Sidebar from "./Components/Sidebar";
import Info from "./Components/NavContent/Info";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Sidebar />
        <Info />
      </div>
    </div>
  );
}

export default App;
