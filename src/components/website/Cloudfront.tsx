import "./website.css";
import createDist from "../../assets/create-dist.png";
import domain from "../../assets/dist-domain.png";
import cache from "../../assets/cf-cache.png";
import behavior from "../../assets/create-behavior.png";


function Cloudfront() {
    return (
        <div className="card">
            <h3>Creating a Cloudfront distribution:</h3>
            <p>
                The next step is to create a Cloudfront distribution in AWS. This step is only necessary if you want your
                website to be available over <i>https</i>. If you are happy to serve your website over <i>http</i>
                (i.e without SSL), then you can directly map your S3 bucket to your domain in Route 53.
                We will need to follow the steps detailed below:
                <ul>
                    <li>
                        Click on the <b>Create Distribution</b> button on the Cloudfront dashboard on the AWS console: <br/><br/>
                        <img src={createDist} width={600} height={300} />
                    </li>
                    <li>
                        Select a name for the domain from the list of S3 buckets provided. <br/><br/>
                        <img src={domain} width={600} height={300} />
                    </li>
                    <li>
                        In the <i>Default Cache Behavior</i> section, select <i>Redirect HTTP to HTTPS</i> for the
                        <i>Viewer protocol policy</i>. Click on the <b>Create distribution</b> button to create the
                         distribution.<br/><br/>
                        <img src={cache} width={600} height={300} />
                    </li>
                    <li>
                        Back on the Distribution list page, select the distribution you just created and select the
                        <b>Behaviors</b> tab. Edit the default behavior and add an alternate domain name which points
                        to your website (e.g abc.com). At this point, you will also need to select an SSL/TLS certificate
                         or create one via AWS certificate manager (ACM) if you do not have one. It may take a day or so
                         to have your certificate ready for use in ACM if you have to create a new one.Refer to
                        <a  href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"
                            target="_blank"> this article</a> for more information on Cloudfront alternate domain names.<br/><br/>
                        <img src={behavior} width={600} height={300} />
                    </li>
                </ul>
            </p>
        </div>
    )
}
export default Cloudfront