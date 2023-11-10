import "./styles.css";

function Microservices () {
    return (
        <div className="card">
            <div>
                <h2>Introduction</h2>
                <p>
                    Microservices architecture is an approach to software development where a large application is built
                    as a collection of small, independent services. Each service is designed to perform a specific
                    business function and can be developed, deployed, and scaled independently.
                </p>
            </div>

            <div>
                <h2>Key Principles</h2>
                <ul>
                    <li>Decentralized Data Management</li>
                    <li>Independent Deployment</li>
                    <li>Resilience</li>
                    <li>Scalability</li>
                    <li>Continuous Delivery</li>
                </ul>
            </div>

            <div>
                <h2>Components of Microservices Architecture</h2>
                <p>
                    Microservices architecture typically consists of the following components:
                </p>
                <ul>
                    <li>Services</li>
                    <li>API Gateway</li>
                    <li>Service Registry</li>
                    <li>Load Balancer</li>
                    <li>Database</li>
                </ul>
            </div>

            <div>
                <h2>Advantages</h2>
                <p>
                    Some of the key advantages of microservices architecture include:
                </p>
                <ul>
                    <li>Scalability</li>
                    <li>Faster Development and Deployment</li>
                    <li>Technology Diversity</li>
                    <li>Improved Fault Isolation</li>
                </ul>
            </div>

            <section>
                <h2>Challenges</h2>
                <p>
                    While microservices offer several benefits, they also come with challenges, including:
                </p>
                <ul>
                    <li>Increased Complexity</li>
                    <li>Service Coordination</li>
                    <li>Data Consistency</li>
                    <li>Testing and Debugging</li>
                </ul>
            </section>
        </div>
    )
}
export default Microservices;