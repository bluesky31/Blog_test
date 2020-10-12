import React from "react";
import EntryBoxView from "./EntryBoxView";
import ProjectBoxView from "./ProjectBoxView";
import EntryData from "../EntryData";
import ProjectData from "../ProjectData";
import Label from "./Label";
import Directory from "../Directory";
import {blog_data, project_data} from "../Data";

const Home = () => {
    return (
        <div className="Home">
            <h1>Home</h1>
            <p>Welcome! This is my first blog</p>
            <Label text="Learn more about me!" className="NavLabelContainer" image={Directory("./about.png")} link="/about" hoverImageChange={true} hoverImage={Directory("./about_hover.png")}/>
            <div className="Divider2"/>
            <h1>Here are some things I've been making</h1>
            {project_data.map((x:ProjectData)=><ProjectBoxView data={x}/>)}
            <Label text="View more projects" className="NavLabelContainer" image={Directory("./projects.png")} link="/projects" hoverImageChange={true} hoverImage={Directory("./projects_hover.png")}/>
            <div className="Divider2"/>
            <h1>Enjoy reading? </h1>
            <p style={{marginBottom:"20px"}}>I write about interesting things I encounter</p>
            {blog_data.map((x:EntryData)=><EntryBoxView data={x}/>)}
            <Label text="View more blog entries" className="NavLabelContainer" image={Directory("./blog.png")} link="/blog" hoverImageChange={true} hoverImage={Directory("./blog_hover.png")}/>
            <br/>
        </div>
    );
}

export default Home;