import React from "react";
import EntryBoxView from "./EntryBoxView";
import EntryData from "../EntryData";

const Home = ({data}:{data:EntryData[]}) => {
    return (
        <>
            <div style={{font:"3em Times New Roman"}}>Home</div>
            {data.map((x:EntryData)=><EntryBoxView data={x}/>)}
        </>
    );
}

export default Home;