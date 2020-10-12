import React from "react";
import ProjectBoxView from "./ProjectBoxView";
import ProjectData from "../ProjectData";
import {project_data} from "../Data";

const Projects = () => {
    return (
        <div className="Projects">
            <h1>My Projects</h1>
            <br/>
            {project_data.map((x:ProjectData)=><ProjectBoxView data={x}/>)}
        </div>
    );
}

export default Projects;