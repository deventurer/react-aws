import "./about.css";
import logo from "../../assets/LOGO.svg";

function About () {
    return (
        <div>

            <div className="card">
                <p>
                    This website is a static React.js application which is hosted on AWS. Some salient points about
                    this application are:
                    <ul>
                        <li> It uses <a href="https://vitejs.dev" target="_blank">
                            Vite &nbsp;
                        </a>
                            to create the React.js app and bundle it.
                        </li>
                        <li>Uses an AWS S3 bucket to deploy the app.</li>
                        <li>Uses a Cloudfront distribution which points to the S3 bucket for SSL and Edge location capability.
                        </li>
                        <li>Uses a CNAME or DNS entry created using AWS Route 53 and maps it
                            to the Cloudfront distribution.
                        </li>
                    </ul>
                </p>
                <img src={logo}  width={100} height={100} className="headerImg"/>
            </div>

        </div>
    )
}

export default About
