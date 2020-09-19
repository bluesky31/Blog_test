import React from "react";
import History from "../History";

const TagLabel = ({tag,active=true,marginRight="0px"}:{tag:string,active?:boolean,marginRight?:string}) => { //define width, height and colour in css
    const click = () => {
        if (active) History.push("/tags/"+tag);
    }
    return (<div onClick={click} style={{cursor:(active?"pointer":"default"),marginRight:marginRight}}>
        <div className="TagLabelTriangle"/>
        <div className="TagLabelRect">
            {tag}
        </div>
    </div>)
}

export default TagLabel;