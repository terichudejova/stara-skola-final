import { useState } from 'react'
import './App.css'
import "./mainContainer.css"
import "./landingPage.css"
import NavigationBar from './NavigationBar'
import "./navbar.css"

function App() {

  return (
    <div>
        <div id='mainContainer'>
            <div id='landingPage'>
              <div id='navbar'>
                  <NavigationBar/>
              </div>
                <h1>kavárna Stará škola</h1>
            </div>
            <div id='nabidka'>

            </div>
        </div>
    </div>
  )
}

export default App
