import ProjectData from "./ProjectData";
import EntryData from "./EntryData";
import SchoolingData from "./SchoolingData";

const project_data:ProjectData[] = require("./project-entries.json");
const schooling_data:SchoolingData[] = require("./schooling-entries.json");
const blog_data:EntryData[] = require("./blog-entries.json");
const tag_map:Map<string,EntryData[]> = new Map();
const address_set:Set<string>=new Set();
for(const entry of blog_data){
    for (const tag of entry.tags){
        if (!tag_map.has(tag)) tag_map.set(tag,[]); 
        tag_map.get(tag)?.push(entry);
    }
}
for(const entry of blog_data){
    var title=entry.title.slice(0,10).replace(/ /g,"-");
    var original_title=title;
    var num = 1;
    while (address_set.has(title)){
        num++;
        title=original_title+num;
    }
    address_set.add(title);
    entry.address=title;
}

export {blog_data};
export {project_data};
export {tag_map};
export {schooling_data};