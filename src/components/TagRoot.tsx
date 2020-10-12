import React from "react";
import TagLabel from "./TagLabel";
import {tag_map} from "../Data";

const TagRoot = () => {
    return (<div className="TagSpecific">
        <h1 style={{display:"inline-block"}}>
            Group entries by tag:
        </h1>
        <div style={{display:"flex",flexDirection:"row",alignItems:"start",marginBottom:"10px"}}>
            {Array.from(tag_map.keys()).map((s:string)=><div><TagLabel text={s}/></div>)}
        </div>
    </div>)
}

export default TagRoot;