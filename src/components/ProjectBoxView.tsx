import React from "react";
import ProjectData from "../ProjectData";
import Icon from "./Icon";
import Label from "./Label";
import ShortenText from "../ShortenText";
import Directory from "../Directory";
import History from "../History";

const ProjectBoxView = ({data}:{data:ProjectData}) => {
    return (
    <div className="EntryBoxMain">
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{marginRight:"15px"}}>
                <Icon width="100px" height="100px" image={Directory("./"+data.image)}/>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <div className="ProjectBoxTitle">
                        {data.title}
                    </div>
                    <div onClick={()=>{History.push("/address_not_found")}}>
                        <Label image={Directory("./linkArrow.png")} iconWidth="25px" iconHeight="25px" className="EntryBoxViewLink" text="View" marginCentre="5px" hoverImageChange={true} hoverImage={Directory("./linkArrow_hover.png")}/>
                    </div>
                </div>
                <div className="ProjectBoxDescription">
                        {data.project_description}
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
                    {data.tags.map((s:string[])=><Label text={s[0]} image={Directory(s[1])} marginRight="10px" className="ProjectLabelContainer" active={false}/>)}
                </div>
            </div>
        </div>
        <div className="Divider1"/>
        <div className="EntryBoxContent">
            {ShortenText(data.project_content)}
        </div>
    </div>);
}

export default ProjectBoxView;