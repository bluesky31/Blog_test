interface ProjectData {
    image:string;
    title:string;
    date_start:[number, number]; // month:year
    date_end:[number, number]
    tags:string[][];
    project_content:string;
    project_description:string;
}

export default ProjectData;