import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <h1>Marvel's Hero Database</h1>
      <div className='marvel-main'>


        <div className='sidebar'>

          <ul>
            <li>&#127968;Home</li>
            <li>&#128269;Search</li>
            <li>&#128295;About</li>
          </ul>
        </div>

        <div className='dash'>
          <h1>Marvel Characters Go Here</h1>
        </div>


      </div>

    </>
  )
}

export default App
