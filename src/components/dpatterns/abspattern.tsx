import AbstractFactoryMarkDown  from './md/AbstractFactory.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function AbstractFactory() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(AbstractFactoryMarkDown)
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
export  default AbstractFactory;