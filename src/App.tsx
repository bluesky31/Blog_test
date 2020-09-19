import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import TagRoot from "./components/TagRoot";
import TagSpecific from "./components/TagSpecific";
import EntryData from "./EntryData";
import EntryFullView from "./components/EntryFullView";

function App() {
  const data:EntryData[] = require("./data-entries.json");
  const tag_map:Map<string,EntryData[]> = new Map();
  const address_set:Set<string>=new Set();
  for(const entry of data){
      for (const tag of entry.tags){
          if (!tag_map.has(tag)) tag_map.set(tag,[]); 
          tag_map.get(tag)?.push(entry);
      }
  }
  for(const entry of data){
    var title=entry.title.slice(0,10).replace(/\ /g,"-");
    var original_title=title;
    var num = 1;
    while (address_set.has(title)){
      num++;
      title=original_title+num;
    }
    address_set.add(title);
    entry.address=title;
  }
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Navbar/>
      <div style={{marginLeft:"400px"}}>
        <Switch>
            <Route path='/' component={()=>(<Home data={data}/>)} exact/>
            <Route path='/about' component={About} exact/>
            <Route path="/tags" component={()=><TagRoot tag_map={tag_map}/>} exact/>
            {Array.from(tag_map.keys()).map((n:string)=>
              <Route path={"/tags/"+n} component={()=><TagSpecific tag={n} entries={tag_map.get(n)!}/>}/>
              )}
            {data.map((n:EntryData)=>
            <Route path={"/blog/"+n.address} component={()=><EntryFullView data={n}/>}/>
            )}
            <Route component={Error}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
