import React, {useState} from "react";
import History from "../History";

const PersistentLink = ({text,link,className,hoverClassName="",hoverPermanent=false,active=true}:{active?:boolean,hoverPermanent?:boolean,text:string, link:string, className:string, hoverClassName?:string}) => { //define width, height and colour in css
    hoverClassName = hoverClassName === ""?className+ " " +className+"Hover":className+" "+hoverClassName;
    const [param, setParam] = useState(false);
    if (text==="The best blog"){
        console.log(hoverPermanent);
        console.log(param);
    }
    const change = (hover:boolean) => {
        setParam(hover)
    }
    const click = () => {
        History.push(link!);
    }
    const hover = active && (param || hoverPermanent);
return (<div style={{cursor:active?"pointer":"auto"}} className={hover?hoverClassName:className} onClick={click} onMouseEnter={()=>change(true)} onMouseLeave={()=>change(false)}>{text}</div>)
}

export default PersistentLink;