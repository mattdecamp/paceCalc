import { useState } from "react";
import "./App.scss";
import Tab from "./components/Tab";
import PacePanel from "./components/panels/PacePanel";
import ConvertPanel from "./components/panels/ConvertPanel";

function App() {
  const [showPace, setShowPace] = useState(true);
  const [showConvert, setShowConvert] = useState(false);

  return (
    <div className="App">
      <div id="wrapper">
        <div id="tabList" role="tablist" aria-label="Toolbar">
          <Tab
            onClick={() => {
              setShowPace(true);
              setShowConvert(false);
            }}
            isActive={showPace}
          >
            Pace
          </Tab>
          <Tab
            onClick={() => {
              setShowPace(false);
              setShowConvert(true);
            }}
            isActive={showConvert}
          >
            Convert
          </Tab>
        </div>
        {showPace ? <PacePanel /> : null}
        {showConvert ? <ConvertPanel /> : null}
      </div>
    </div>
  );
}

export default App;
