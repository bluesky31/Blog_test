import React from "react";
import History from "../History";

const Navbar = () => {
    const redirect = (link:string)=>{
        History.push(link);
    }
    return (
        <div className="navbar">
            <div onClick={()=>redirect("/")} style={{cursor:"pointer"}}>Home</div>
            <div onClick={()=>redirect("/about")} style={{cursor:"pointer"}}>About</div>
            <div onClick={()=>redirect("/tags")} style={{cursor:"pointer"}}>Search by Tag</div>
        </div>
    );
}

export default Navbar;