import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/weatherHist";
import LineGraph from "./components/linechart";
import BarGraph from "./components/bar";
import WeatherDetails from "./components/WeatherDetails"; // <-- you'll add this component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>Weather Data Visualization</h1>
      <div className='marvel-main'>

        <div className='sidebar'>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
          </ul>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Dashboard />
                <LineGraph />
                <BarGraph />
              </>
            }
          />

          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
