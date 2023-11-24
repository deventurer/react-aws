import SingletonMarkDown  from './md/Singleton.md'
import Markdown from 'markdown-to-jsx'
import {useEffect, useState} from "react";

function Singleton() {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(SingletonMarkDown)
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
export  default Singleton;