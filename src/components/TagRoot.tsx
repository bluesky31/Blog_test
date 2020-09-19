import React from "react";
import EntryData from "../EntryData";
import TagLabel from "./TagLabel";

const TagRoot = ({tag_map}:{tag_map:Map<string,EntryData[]>}) => {
    return (<>
        <div style={{marginBottom:"10px"}}>Tags:</div>
        <div style={{display:"flex",flexDirection:"column"}}>
        {Array.from(tag_map.keys()).map((n:string)=><div style={{marginBottom:"10px"}}><TagLabel tag={n}/></div>)}
        </div>
    </>)
}

export default TagRoot;