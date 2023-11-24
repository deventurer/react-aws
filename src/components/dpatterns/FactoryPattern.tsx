import FactoryMarkDown  from './md/FactoryMethod.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function FactoryMethod() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(FactoryMarkDown)
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
export  default FactoryMethod;