import DecoratorMarkDown  from './md/Decorator.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function Decorator() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(DecoratorMarkDown)
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
export  default Decorator;