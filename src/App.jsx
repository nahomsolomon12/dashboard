import { useState } from 'react'
import Dashboard from "./components/weatherHist"; // 👈 adjust path if needed

import './App.css'

function App() {

  return (
    <>
      <div className='marvel-main'>
        <div className='sidebar'>

          <ul>
            <li><a href='./App.jsx'>&#127968;Home</a></li>
          </ul>
        </div>



        <Dashboard />

      </div>

    </>
  )
}

export default App
