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
import "./povidani.css"

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
                  <div id='povidani'>
                      <h2>Kdo jsme?</h2>
                      <p>
                        Jsme smíchovská kavárna Stará škola zaměstnávající seniory, kteří nechtějí v důchodu sedět doma,
                        ale baví je pracovat a být mezi lidmi. Jsme sociálním podnikem, a každým šálkem kávy tak
                        podpoříte provoz center pro seniory. Připravujeme zde výběrovou kávu a pečeme si tu vlastní
                        buchty, koláče nebo bábovky. No budete se u nás cítit přesně jako u babičky. A to nejen díky
                        zmiňovaným dobrotám, ale také příjemnému nostalgickému prostředí.
                      </p>
                  </div>
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
