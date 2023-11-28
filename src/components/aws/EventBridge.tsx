import markdownfile  from './md/eventbridge.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function EventBridge() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(markdownfile)
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
export  default EventBridge;