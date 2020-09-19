interface EntryData {
    image:string;
    title:string;
    date:[number, number, number]; // day:month:year
    reading_time:number; // minutes
    tags:string[];
    blog_content:string;
    address:string;
}

export default EntryData;