import React from "react";
import EntryData from "../EntryData";
import EntryBoxView from "./EntryBoxView";
import TagLabel from "./TagLabel";
import {tag_map} from "../Data";

const TagSpecific = ({tag,entries}:{tag:string,entries:EntryData[]}) => {
    return (<div className="TagSpecific">
        <h1 style={{display:"inline-block"}}>
            Group entries by tag:
        </h1>
        <div style={{display:"flex",flexDirection:"row",alignItems:"start",marginBottom:"10px"}}>
            {Array.from(tag_map.keys()).map((s:string)=><div><TagLabel text={s} currentTag={tag}/></div>)}
        </div>
        {entries.map((n:EntryData)=><EntryBoxView data={n} currentTag={tag}/>)}
    </div>);
    /*<div style={{verticalAlign:"middle",display:"inline-block"}}><TagLabel text={tag} hoverImageChange={false} active={false}/></div>
        {entries.map((n:EntryData)=><Entry data={n}/>)}*/
}

export default TagSpecific;