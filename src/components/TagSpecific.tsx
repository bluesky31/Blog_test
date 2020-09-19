import React from "react";
import EntryData from "../EntryData";
import Entry from "./EntryBoxView";
import TagLabel from "./TagLabel";

const TagSpecific = ({tag,entries}:{tag:string,entries:EntryData[]}) => {
    return (<>
        <div style={{margin:"0 10px 25px 0",display:"inline-block"}}>
            Showing all results for: 
        </div>
        <div style={{verticalAlign:"middle",display:"inline-block"}}><TagLabel tag={tag} active={false}/></div>
        {entries.map((n:EntryData)=><Entry data={n}/>)}
    </>);
}

export default TagSpecific;