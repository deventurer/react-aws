// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import data from './data'

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
      <div className="content">
        <h3>Create a React.js application using Vite and deploy it to AWS S3/Cloudfront:</h3>
        <div className="card">
          <p>
            This article details how to create a React.js application using Vite as a react app generator and bundler and shows
            how to host it on the internet via AWS resources. The following steps will be covered:
            <ul>
              <li>Use <a href="https://vitejs.dev" target="_blank">
                Vite &nbsp;
              </a>
                 to create a React.js app and bundle it.</li>
              <li>Create an AWS S3 bucket and deploy the app there.</li>
              <li>Create an SSL certificate using ACM (AWS Certificate Manager</li>
              <li>Create a Cloudfront distribution which point to the S3 bucket and uses the SSL certificate created in ACM.</li>
              <li>Create a CNAME or DNS entry using AWS Route 53 and map it to the Cloudfront distribution.</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="footer">
        <h3>Deventurer.com</h3>
      </div>
    </>
  )
}

export default App
