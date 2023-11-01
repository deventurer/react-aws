// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
//import data from './data'
import Website from "./components/website/index"

function App() {
  // const [count, setCount] = useState('')
  //
  //   const refreshData = async ()=>{
  //       const v = await data();
  //       setCount(v);
  //   }


    return (
    <>
      <div className="header">
        {/*<a href="https://vitejs.dev" target="_blank">*/}
        {/*  <img src={viteLogo} className="logo" alt="Vite logo" />*/}
        {/*</a>*/}
        {/*/!*<a href="https://react.dev" target="_blank">*!/*/}
        {/*  <img src={reactLogo} className="logo react" alt="React logo" />*/}
        {/*</a>*/}
        Deventurer
      </div>
      <Website/>
      <div className="footer">
        <h3>Deventurer.com</h3>
      </div>
    </>
  )
}

export default App
