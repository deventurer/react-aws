// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteOne from './assets/vite-1.png'
import viteTwo from './assets/vite-2.png'
import distImg from './assets/dist.png'
import folder from './assets/folder.png'
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
        <div className="card">
          <h3>Using Vite to bootstrap a React.js application:</h3>
          <p>
            With Create-React-App being phased out, <a href="https://vitejs.dev" target="_blank">
            Vite &nbsp;
          </a> provides a viable alternative to bootstrap a React.js application from scratch in a speedy manner. Vite
            stands for "quick" in French and provides out of the box support for ES Modules as well as typescript, along
            with the following:
            <ul>
              <li>
                A dev server which comes with Hot Module Replacement (HMR) to update the server as you write your code.
              </li>
              <li>
                A build command that bundles your code, pre-configured to output highly optimized static assets for production.
                Essentially when you run <code> npm run build</code>, it creates a <i>dist</i> folder within the root of your project
                as shown below which contains all your deployable assets, properly uglified and minified:
                <img src={distImg}/>
              </li>
            </ul>
          </p>
          <p>
            In order to install Vite, do the following:
            <ul>
              <li>
                <code>npm create vite@latest</code> (with NPM). Then just follow the prompts.
              </li>
              <li>
                Alternatively, you can also directly specify the project name and the template you want to use
                via additional command line options. For example, to scaffold a Vite + React typescript project, run:<br/>
                <code>npm create vite@latest my-react-app --template react-ts</code><br/><br/>
              </li>
              <li>
                <img src={viteOne} width={600} height={300}/><br/>
                Select the <b>React</b> option.
                <br/><br/>
              </li>
              <li>
                <img src={viteTwo} width={600} height={300} />
                <br/><br/>
              </li>
              <li>
                You will have a complete React project set up with the folder structure below:<br/><br/>
                <img src={folder} width={600} height={300} />

              </li>
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
