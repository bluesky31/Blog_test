import React from "react";
import EntryData from "../EntryData";
import Icon from "./Icon";
import TagLabel from "./TagLabel";
import ShortenText from "../ShortenText";
import InfoLabel from "./InfoLabel";
import Directory from "../Directory";
import History from "../History";

const EntryBoxView = ({data}:{data:EntryData}) => {
    return (
    <div className="EntryBoxMain">
        <div style={{display:"flex",flexDirection:"row"}}>
            <Icon width="75px" height="75px" image={Directory("./circle.jpg")}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <div className="EntryBoxTitle">
                        {data.title}
                    </div>
                    <div onClick={()=>{History.push("/blog/"+data.address)}}>
                        <InfoLabel image={Directory("./linkArrow.png")} iconWidth="25px" iconHeight="25px" className="EntryBoxViewLink" text="View" marginCentre="5px"/>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <InfoLabel image={Directory("./calendar.png")} text={`${data.date[0]}/${data.date[1]}/${data.date[2]}`} marginCentre="3px"/>
                    <InfoLabel image={Directory("./clock.png")} text={`${data.reading_time} ${data.reading_time==1?"minute":"minutes"}`} marginCentre="3px"/>
                    {data.tags.map((s:string)=><TagLabel tag={s} marginRight="10px"/>)}
                </div>
            </div>
        </div>
        <div className="Divider1"/>
        <div className="EntryBoxContent">
            {ShortenText(data.blog_content)}
        </div>
    </div>);
}

export default EntryBoxView;