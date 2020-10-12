import React from "react";
import Label from "./Label";
import Directory from "../Directory";

const TagLabel = ({text, active=true, hoverImageChange=true, currentTag="__none__"}:{text:string, active?:boolean, hoverImageChange?:boolean, hoverPermanent?:boolean, currentTag?:string}) => {
    return (<Label text={text} marginRight="10px" className="TagLabelContainer" image={Directory("./tag-regular.png")} link={"/blog/tags/"+text} hoverImageChange={hoverImageChange} hoverImage={Directory("./tag-hover.png")} active={active} hoverPermanent={currentTag === text}/>)
}

export default TagLabel;