import React, {useState} from "react";
import History from "../History";
import Icon from "./Icon";

const Label = ({text,link,active=true,marginRight="10px",marginCentre="5px",className,iconWidth="20px",iconHeight="20px",image,hoverImageChange=false,hoverImage="",hoverClassName="",hoverPermanent=false}:{text:string,link?:string,active?:boolean,marginRight?:string,marginCentre?:string,className:string,iconWidth?:string,iconHeight?:string,image?:string,hoverImageChange?:boolean,hoverImage?:string,hoverClassName?:string,hoverPermanent?:boolean}) => { //define width, height and colour in css
    hoverClassName = hoverClassName === ""?className+ " " +className+"Hover":className+" "+hoverClassName;
    const [param, setParam] = useState(false);
    const change = (hover:boolean) => {
        setParam(hover);
    }
    const click = () => {
        if (active) History.push(link!);
    }
    const hover = param || hoverPermanent;
    return (<div onMouseEnter={()=>change(true)} onMouseLeave={()=>change(false)} onClick={click} className={hover?hoverClassName:className} style={{cursor:(active?"pointer":"auto"),marginRight:marginRight,pointerEvents:active?"initial":"none"}}>
       <div style={{marginRight:marginCentre}}><Icon image={hover?hoverImage:image!} width={iconWidth} height={iconHeight}/></div>
       {text}
   </div>)
}

export default Label;