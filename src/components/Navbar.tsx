import React from "react";
import Label from "./Label";
import Directory from "../Directory";
import Icon from "./Icon";
import PersistentLink from "./PersistentLink";

const Navbar = ({location}:{location:string}) => {
    console.log("hi");
    return (
        <div className="Navbar">
            <PersistentLink text="The best blog" link="/" className="NavbarTitle" hoverPermanent={location==="/"}/>
            <Icon width="150px" height="150px" image={Directory("./blog_media/img5.jpg")}/>
            <p>A very interesting website</p>
            <br/>
            <Label text="About" className="NavbarLink" image={Directory("./about.png")} link="/about" hoverImageChange={true} hoverImage={Directory("./about_hover.png")} hoverPermanent={location==="/about"}/>
            <Label text="Projects" className="NavbarLink" image={Directory("./projects.png")} link="/projects" hoverImageChange={true} hoverImage={Directory("./projects_hover.png")} hoverPermanent={location==="/projects"}/>
            <Label text="Blog" className="NavbarLink" image={Directory("./blog.png")} link="/blog" hoverImageChange={true} hoverImage={Directory("./blog_hover.png")} hoverPermanent={location==="/blog"}/>
        </div>
    );
}

export default Navbar;