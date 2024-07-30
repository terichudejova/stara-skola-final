import { useState } from 'react'
import './App.css'
import "./mainContainer.css"
import "./landingPage.css"
import NavigationBar from './NavigationBar'
import "./navbar.css"
import "./nabidka.css"
import "./kontakt.css"
import "./kdoJsme.css"
import CarouselGallery from './CarouselGallery'

function App() {

  return (
    <div>
        <div id='mainContainer'>
            <div id='landingPage'>
              <div id='navbar'>
                  <a href='#landingPage'><img id="logo" src="src/images/logo.jpg"/></a>
                  <NavigationBar/>
              </div>
              <h1 id='onas'>kavárna Stará škola</h1>
              <p>- místo, kde se zastaví čas a oživí vzpomínky na nejlepší koláče od babičky -</p>
              <div id="kdoJsme">
                  <CarouselGallery/>
              </div>
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
