import markdownfile  from './md/stepfunctions.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function StepFunction() {

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
export  default StepFunction;