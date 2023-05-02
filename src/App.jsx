import { useState } from "react";
import "./App.scss";
import Tab from "./components/Tab";
import PacePanel from "./components/panels/PacePanel";
import ConvertPanel from "./components/panels/ConvertPanel";

function App() {
  const [count, setCount] = useState(0);
  const [showPace, setShowPace] = useState(true);
  const [showConvert, setShowConvert] = useState(false);

  return (
    <div className="App">
      <div id="wrapper">
        <div id="wrapper" className="tabs">
          <div id="tabList" role="tablist" aria-label="Toolbar">
            <Tab
              onClick={() => {
                setShowPace(true);
                setShowConvert(false);
              }}
            >
              Pace
            </Tab>
            <Tab
              onClick={() => {
                setShowPace(false);
                setShowConvert(true);
              }}
            >
              Convert
            </Tab>
          </div>
        </div>
        {showPace ? <PacePanel /> : null}
        {showConvert ? <ConvertPanel /> : null}
      </div>
    </div>
  );
}

export default App;
