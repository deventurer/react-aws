import "./youtube.css";

function About () {
    return (
        <div className="content">
            <h3>Check out our Youtube channel:</h3>
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/videoseries?si=Fb1lmlEbnOL0h2Az&amp;list=PLwIDw6py5RrIw6kIRPvjiaPy0ZethrvVZ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe><br/><br/>
        </div>
    )
}

export default About
