import { useState } from 'react'
import './App.scss'
import TabList from './components/TabList'
import PacePanel from './components/panels/PacePanel'
// import ConvertPanel from './components/panels/ConvertPanel'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
      <div id="wrapper">
        <TabList />
        <PacePanel />
        {/* <ConvertPanel /> */}
      </div>
    </div>
  )
}

export default App
