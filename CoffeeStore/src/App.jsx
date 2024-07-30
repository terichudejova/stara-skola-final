import { useState } from 'react'
import './App.css'
import "./mainContainer.css"
import "./landingPage.css"
import NavigationBar from './NavigationBar'
import "./navbar.css"
import "./nabidka.css"
import "./kontakt.css"

function App() {

  return (
    <div>
        <div id='mainContainer'>
            <div id='landingPage'>
              <div id='navbar'>
                  <NavigationBar/>
              </div>
                <h1 id='onas'>kavárna Stará škola</h1>
            </div>
            <div id='nabidka'>

            </div>
            <div id="kontakt">

            </div>
        </div>
   </div>
  )
}

export default App
