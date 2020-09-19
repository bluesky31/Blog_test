import React from "react"
import EntryData from "../EntryData"

const EntryFullView = ({data}:{data:EntryData}) => {
    return (<div className="EntryPageMain">
        <div className="EntryPageTitle">
            {data.title}
        </div>
        <div className="Divider1"/>
        <div className="EntryPageContent">
            {data.blog_content}
        </div>
    </div>)
}

export default EntryFullView;