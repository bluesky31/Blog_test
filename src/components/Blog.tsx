import React from "react";
import EntryBoxView from "./EntryBoxView";
import EntryData from "../EntryData";
import {blog_data} from "../Data";
import Label from "./Label";
import Directory from "../Directory";

const Projects = () => {
    return (
        <div className="Blog">
            <h1>My blog entries</h1>
            <Label text="Search entries by tag" className="NavLabelContainer" image={Directory("./tag_navlabel-regular.png")} link="/blog/tags" hoverImageChange={true} hoverImage={Directory("./tag_navlabel-hover.png")}/>
            {blog_data.map((x:EntryData)=><EntryBoxView data={x}/>)}
        </div>
    );
}

export default Projects;