import "./patterns.css";

function DesignPatterns () {
    return (
        <div className="card">

            <article>
                <header>
                    <h1>Introduction to Software Design Patterns</h1>
                </header>

                <section>
                    <p>
                        Software design patterns are reusable solutions to common problems that arise during software development. They represent best practices evolved over time by experienced software developers.
                    </p>
                </section>

                <section>
                    <h2>Why Use Design Patterns?</h2>
                    <p>
                        Design patterns provide a structured and efficient way to solve common design problems, offering several benefits:
                    </p>
                    <ul>
                        <li>Reusability: Patterns can be reused across different projects.</li>
                        <li>Maintainability: Patterns make code more maintainable and scalable.</li>
                        <li>Common Vocabulary: Patterns provide a common vocabulary for developers to communicate ideas.</li>
                        <li>Best Practices: Patterns encapsulate best practices in software development.</li>
                    </ul>
                </section>

                <section>
                    <h2>Types of Design Patterns</h2>
                    <p>
                        There are three main types of design patterns:
                    </p>
                    <ol>
                        <li>
                            <h3>Creational Patterns</h3>
                            <p>Deal with the process of object creation, providing flexibility in the instantiation process.</p>
                        </li>
                        <li>
                            <h3>Structural Patterns</h3>
                            <p>Focus on the composition of classes or objects, creating larger structures from individual components.</p>
                        </li>
                        <li>
                            <h3>Behavioral Patterns</h3>
                            <p>Define ways in which objects interact and communicate with each other.</p>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2>Common Design Patterns</h2>
                    <p>
                        Some widely used design patterns include:
                    </p>
                    <ul>
                        <li>Singleton Pattern</li>
                        <li>Factory Method Pattern</li>
                        <li>Observer Pattern</li>
                        <li>Decorator Pattern</li>
                        <li>Strategy Pattern</li>
                    </ul>
                </section>

                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Incorporating design patterns into software development can significantly improve code quality, maintainability, and scalability. As a developer, understanding when and how to apply these patterns is crucial for building robust and efficient software systems.
                    </p>
                </section>
            </article>
        </div>
    )
}

export default DesignPatterns
