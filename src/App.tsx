// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
//import data from './data'
import Website from "./components/website/index"
import About from "./components/about/index"
import DesignPattern from "./components/dpatterns/index"
import Youtube from "./components/youtube/index"
import Microservices from "./components/microservices/index"
import Navigation from "./components/navigation/index"
import logo from "./assets/LOGO.svg"
import {
    BrowserRouter as Router,
    Routes,
    Route
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

            <Navigation/>

                <Routes>
                    <Fragment>
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
