import React from "react";

const Icon = ({image,width="20px",height="20px"} : {image:string,width?:string,height?:string}) => {
    return (<div style={{width:width,height:height,backgroundImage:"url("+image+")",backgroundSize:"100% 100%"}}/>);
}

export default Icon;