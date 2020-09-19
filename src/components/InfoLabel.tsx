import React from "react"
import Icon from "./Icon";

const InfoLabel = ({image,text,iconWidth="22px",iconHeight="22px",marginCentre="0px",className="EntryBoxLabel"}:{image:string,text:string,iconWidth?:string,iconHeight?:string,marginCentre?:string,className?:string}) => {
    return (<div className={className}>
        <div style={{marginRight:marginCentre}}>
            <Icon width={iconWidth} height={iconHeight} image={image}/>
        </div>
        {text}
    </div>)
}

export default InfoLabel;