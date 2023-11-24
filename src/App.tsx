// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
//import data from './data'
import Website from "./components/website/index"
import About from "./components/about/index"
import DesignPattern from "./components/dpatterns/index"
import Strategy from "./components/dpatterns/strategy"
import AbstractFactory from "./components/dpatterns/abspattern"
import Observer from "./components/dpatterns/ObserverPattern"
import Decorator from "./components/dpatterns/DecoratorPattern"
import Factory from "./components/dpatterns/FactoryPattern"
import Singleton from "./components/dpatterns/Singleton"
import Youtube from "./components/youtube/index"
import Microservices from "./components/microservices/index"
import Navigation from "./components/navigation/index"
import DB91 from "./components/db91/index"
import logo from "./assets/LOGO.svg"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import {Fragment} from 'react'

function App() {
  // const [count, setCount] = useState('')
  //
  //   const refreshData = async ()=>{
  //       const v = await data();
  //       setCount(v);
  //   }


    return (
        <Router>
      <div className="header">
        {/*<a href="https://vitejs.dev" target="_blank">*/}
        {/*  <img src={viteLogo} className="logo" alt="Vite logo" />*/}
        {/*</a>*/}
        {/*/!*<a href="https://react.dev" target="_blank">*!/*/}
        {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*</a>*/}
          <img src={logo}  width={100} height={100} className="headerImg"/>
        <div className="headerTitle"> Deventurer </div>
      </div>
        <div className="container">
            <Routes>
                    <Fragment>
                        <Route path="/db91" element={<DB91/>} />
                        <Route element={<><Navigation/><Outlet/></>}>
                            <Route path="/" element={<Website/>}>
                            </Route>
                            <Route path="/about" element={<About />}>
                            </Route>
                            <Route path="/microservices" element={<Microservices/>}>
                            </Route>
                            <Route path="/youtube" element={<Youtube/>}>
                            </Route>
                            <Route path="/patterns" element={<DesignPattern/>}>
                            </Route>
                            <Route path="/patterns/strategy" element={<Strategy/>}>
                            </Route>
                            <Route path="/patterns/abstractfactory" element={<AbstractFactory/>}>
                            </Route>
                            <Route path="/patterns/observer" element={<Observer/>}>
                            </Route>
                            <Route path="/patterns/decorator" element={<Decorator/>}>
                            </Route>
                            <Route path="/patterns/factory" element={<Factory/>}>
                            </Route>
                            <Route path="/patterns/singleton" element={<Singleton/>}>
                            </Route>
                        </Route>

                    </Fragment>

                </Routes>
            </div>
      <div className="footer">
        <h3>Deventurer.com</h3>
      </div>
        </Router>
  )
}

export default App
