import React from "react";
import {schooling_data} from "../Data";
import SchoolingData from "../SchoolingData";
import Schooling from "./Schooling";

const About = () => {
    return (
        <div className="About">
            <h1>About</h1>
            <div className="AboutTextBox">
                <p>Some information about myself</p>
                <p>Some information about myself</p>
                <p>Some information about myself</p>
                <p>Some information about myself</p>
                <p>Some information about myself</p>
            </div>
            <div className="Divider2"/>
            <h1>Education</h1>
            {schooling_data.map((n:SchoolingData)=><Schooling data={n}/>)}
        </div>
    );
}

export default About;