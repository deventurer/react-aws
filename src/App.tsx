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
import AWS from "./components/aws/index"
import Apigateway from "./components/aws/ApiGateway"
import Lambda from "./components/aws/Lambda"
import StepFunction from "./components/aws/StepFunction"
import EventBridge from "./components/aws/EventBridge"
import AppSync from "./components/aws/AppSync"
import SNS from "./components/aws/SNS"
import SQS from "./components/aws/SQS"
import logo from "./assets/LOGO.svg"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet, Link
} from "react-router-dom";
import {Fragment} from 'react'
import Privacy from "./components/footer/Privacy";
import Contact from "./components/footer/Contact";
import Disclaimer from "./components/footer/Disclaimer";

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
                            <Route path="/aws" element={<AWS/>}>
                            </Route>
                            <Route path="/aws/apigateway" element={<Apigateway/>}>
                            </Route>
                            <Route path="/aws/lambdas" element={<Lambda/>}>
                            </Route>
                            <Route path="/aws/stepfunctions" element={<StepFunction/>}>
                            </Route>
                            <Route path="/aws/eventbridge" element={<EventBridge/>}>
                            </Route>
                            <Route path="/aws/appsync" element={<AppSync/>}>
                            </Route>
                            <Route path="/aws/sns" element={<SNS/>}>
                            </Route>
                            <Route path="/aws/sqs" element={<SQS/>}>
                            </Route>
                            <Route path="/footer/privacy" element={<Privacy/>} />
                            <Route path="/footer/contact" element={<Contact/>} />
                            <Route path="/footer/disclaimer" element={<Disclaimer/>} />
                        </Route>

                    </Fragment>

                </Routes>
            </div>
      <div className="footer">
          <Link className="footerItem" to="/about"> <b>About</b>
          </Link>
          <Link className="footerItem" to="/footer/Privacy"> <b>Privacy</b>
          </Link>
          <Link className="footerItem" to="/footer/contact"> <b>Contact us</b>
          </Link>
          <Link className="footerItem" to="/footer/disclaimer"> <b>Disclaimer</b>
          </Link>
      </div>
        </Router>
  )
}

export default App
