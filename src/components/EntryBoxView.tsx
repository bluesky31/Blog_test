import React from "react";
import EntryData from "../EntryData";
import Icon from "./Icon";
import Label from "./Label";
import ShortenText from "../ShortenText";
import Directory from "../Directory";
import History from "../History";
import TagLabel from "./TagLabel";
import PersistentLink from "./PersistentLink";

const EntryBoxView = ({data,currentTag="__none__"}:{data:EntryData,currentTag?:string}) => {
    return (
    <div className="EntryBoxMain">
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{marginRight:"10px"}}>
                <Icon width="75px" height="75px" image={Directory("./"+data.image)}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                    <PersistentLink text={data.title} link={"/blog/"+data.address} className="EntryBoxTitle"/>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
                    <Label image={Directory("./calendar.png")} text={`${data.date[0]}/${data.date[1]}/${data.date[2]}`} marginCentre="3px" className="EntryBoxLabel" active={false}/>
                    <Label image={Directory("./clock.png")} text={`${data.reading_time} ${data.reading_time===1?"minute":"minutes"}`} marginCentre="3px" className="EntryBoxLabel" active={false}/>
                    {data.tags.map((s:string)=><TagLabel text={s} currentTag={currentTag}/>)}
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