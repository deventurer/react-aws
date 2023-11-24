import ObserverMarkDown  from './md/Observer.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function Observer() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(ObserverMarkDown)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <div className="card">
            <Markdown>
                {markdown}
            </Markdown>
        </div>
    )
}
export  default Observer;