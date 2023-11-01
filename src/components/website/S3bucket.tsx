import "./website.css";
import createBucket from "../../assets/create-bucket.png";
import bucketName from "../../assets/bucket-name.png";
import blockPubAccess from "../../assets/block-public-access.png";
import bucketCreate from "../../assets/bucket-create.png";
import swHost from "../../assets/static-web-hosting.png";
import swHost1 from "../../assets/static-web-hosting-2.png";
import policy from "../../assets/policy.png";


function S3bucket() {
    return (
        <div className="card">
            <h3>Creating an S3 bucket on AWS to host our React.js application:</h3>
            <p>
                The next step is to create an S3 bucket in AWS so that we can deploy our code from the <i>dist</i> folder
                into the bucket. We will need to follow the steps detailed below:
                <ul>
                    <li>
                        Click on the <b>Create bucket</b> button on the S3 dashboard on the AWS console: <br/><br/>
                        <img src={createBucket} width={600} height={300} />
                    </li>
                    <li>
                        Enter a name for the bucket. This name has to be the same as the name of the website
                         you create in the step to create a DNS name in Route 53 in the subsequent step. E.g if your
                        website name is <i>abc.com</i>, then the bucket name should be <i>abc.com</i>: <br/><br/>
                        <img src={bucketName} width={600} height={300} />
                    </li>
                    <li>
                        Uncheck the <b>Block all public access</b> option and acknowledge the warning. This is so that
                        the bucket contents can be accessible to the outside world via the S3 bucket url: <br/><br/>
                        <img src={blockPubAccess} width={600} height={300} />
                    </li>
                    <li>
                        Click on the <b>Create bucket</b> button to create your S3 bucket.<br/><br/>
                        <img src={bucketCreate} width={600} height={300} />
                    </li>
                    <li>
                        Once back on the S3 bucket dashboard, click on the newly created S3 bucket and select the
                         Properties tab. Scroll down to the <b>Static Web hosting</b> portion and enable it. Enter
                        a value for the <b>Index document</b> value, like <i>index.html</i>. <br/><br/>
                        <img src={swHost} width={600} height={300} /><br/><br/>
                        <img src={swHost1} width={600} height={300} />
                    </li>
                    <li>
                        Next, click on the <b>Permissions</b> tab and enter the following bucket policy
                        (substitute your bucket name for abc.com):<br/><br/>
                        <img src={policy} width={600} height={300} />
                    </li>
                </ul>
            </p>
        </div>
    )
}
export default S3bucket