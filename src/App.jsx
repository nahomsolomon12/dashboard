import Dashboard from "./components/weatherHist";
import LineGraph from "./components/linechart";
import BarGraph from "./components/bar";
import './App.css'

function App() {

  return (
    <>

      <h1>Weather Data Visualization</h1>
      <div className='marvel-main'>
        <div className='sidebar'>

          <ul>
            <li><a href='./App.jsx'>&#127968;Home</a></li>
          </ul>
        </div>

        <Dashboard />
        <LineGraph />
        <BarGraph />

      </div>

    </>
  )
}

export default App
