import React from "react"
import EntryData from "../EntryData"
import Directory from "../Directory";
import PersistentLink from "./PersistentLink";
import Icon from "./Icon";
import Label from "./Label";
import TagLabel from "./TagLabel";

const EntryFullView = ({data}:{data:EntryData}) => {
    return (<div className="EntryPageMain">
        <div style={{display:"flex",flexDirection:"row",marginBottom:"20px"}}>
            <div style={{marginRight:"10px"}}>
                <Icon width="75px" height="75px" image={Directory("./"+data.image)}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                    <PersistentLink text={data.title} link={"/blog/"+data.address} className="EntryPageTitle" active={false}/>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
                    <Label image={Directory("./calendar.png")} text={`${data.date[0]}/${data.date[1]}/${data.date[2]}`} marginCentre="3px" className="EntryBoxLabel" active={false}/>
                    <Label image={Directory("./clock.png")} text={`${data.reading_time} ${data.reading_time===1?"minute":"minutes"}`} marginCentre="3px" className="EntryBoxLabel" active={false}/>
                    {data.tags.map((s:string)=><TagLabel text={s}/>)}
                </div>
            </div>
        </div>
        <div className="Divider2"/>
        <div className="EntryPageContent">
            {data.blog_content}
        </div>
    </div>)
}

export default EntryFullView;