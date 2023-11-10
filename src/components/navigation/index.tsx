import nav from "./nav.json";
import "./nav.css"
import {
    Link
} from "react-router-dom";


function Navigation() {
 return (
    <div className="nav">
        <h4> Contents</h4>
        {nav.content.map(item =>(
                <Link className="navItem" to={item.path}> - {item.label}</Link>
            ))}
    </div>

 )
}

export default Navigation