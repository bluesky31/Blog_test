import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import About from "./components/About";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import TagRoot from "./components/TagRoot";
import TagSpecific from "./components/TagSpecific";
import {tag_map, blog_data} from "./Data";
import EntryData from "./EntryData";
import EntryFullView from "./components/EntryFullView";
import {useLocation} from "react-router-dom"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar location={location.pathname}/>
      <div style={{marginLeft:"300px"}}>
        <Switch>
            <Route path='/' component={()=>(<Home/>)} exact/>
            <Route path='/about' component={About} exact/>
            <Route path="/blog/tags" component={()=><TagRoot />} exact/>
            <Route path="/projects" component={()=><Projects/>} exact/>
            <Route path="/blog" component={()=><Blog/>} exact/>
            {Array.from(tag_map.keys()).map((n:string)=>
              <Route path={"/blog/tags/"+n} component={()=><TagSpecific tag={n} entries={tag_map.get(n)!}/>}/>
              )}
            {blog_data.map((n:EntryData)=>
            <Route path={"/blog/"+n.address} component={()=><EntryFullView data={n}/>} exact/>
            )}

            <Route component={Error}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
