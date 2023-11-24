import nav from "./nav.json";
import "./nav.css"
import {
    Link
} from "react-router-dom";

let currentItem = null;

const onLinkClick = (e) => {
    //e.preventDefault();
    e.stopPropagation();
    // if(currentItem && e.currentTarget != currentItem){
    //     toggleState(currentItem);
    // }
    currentItem = e.currentTarget;
    toggleState( e.currentTarget);

}

const toggleState = (target) =>{
    const el = target.getElementsByClassName('navItemChild');

    for(let i=0; i < el.length; i++){
        el[i].classList.toggle('active');
    }
}

const createLinks = (item, isRoot) =>{
    let childLinks;
    if (item.content){
       childLinks = item.content.map(c =>
        createLinks(c, false));
    }

    if(!isRoot){
        return <Link className="navItemChild" to={item.path} onClick={onLinkClick}> - {item.label}
            {childLinks}
        </Link>;
    }

    return childLinks;
}


function Navigation() {
 return (
    <div className="nav">
        <h4> Contents</h4>
        {nav.content.map((item) =>(
            <Link className="navItem" to={item.path} onClick={onLinkClick}> <b>{item.label}</b>
                {createLinks(item, true)}
            </Link>

                ))}
    </div>

 )
}

export default Navigation