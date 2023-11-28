import markdownfile  from './md/apigateway.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function ApiGateway() {

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
export  default ApiGateway;