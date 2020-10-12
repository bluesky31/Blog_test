import React from "react";
import SchoolingData from "../SchoolingData";
import Icon from "./Icon";
import Directory from "../Directory";

const Schooling = ({data}:{data:SchoolingData}) => {
    return (
    <div className="EntryBoxMain">
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{marginRight:"15px"}}>
                <Icon width="75px" height="75px" image={Directory("./"+data.image)}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <div className="ProjectBoxTitle">
                        {data.title}
                    </div>
                </div>
                <div className="ProjectBoxDescription">
                        {data.description}
                </div>
            </div>
        </div>
        <div className="Divider1"/>
        <div className="EntryBoxContent">
            {data.content}
        </div>
    </div>);
}

export default Schooling;