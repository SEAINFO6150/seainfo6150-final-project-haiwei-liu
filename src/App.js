import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/homepage.jsx";
import Error from "./Error/Error.jsx";
import About from "./About/About.jsx";
import Tags from "./Tags/Tags";
import Follow from "./Follow/Follow";
import Blogs from "./Blogs/Blogs";
import StudyTag from "./TagDetails/StudyTag";
import ChineseFood from "./TagDetails/ChineseFood";
import Travel from "./TagDetails/Travel";
import Fruit from "./TagDetails/Fruit";
import Relax from "./TagDetails/Realx";
import Nav from "./Navbar/Nav";
import java from "./BlogDetails/java";
import dumplings from "./BlogDetails/dumplings";
import newyork from "./BlogDetails/newyork";


const externalContent = {
    title: "#This is my Blog List#",
    author: "Haiwei Liu",
    date: "4/6/2020",
    text: "Hope you like it!",
    img1: "https://myareanetwork-photos.s3.amazonaws.com/editorphotos/f/28325_1528484049.jpg",
    img2: "https://pmimaui.com/wp-content/uploads/2018/01/GettyImages-625006074-e1515708812857-1500x609.jpg"
};

function App() {
  return (
    <Router>

        <Nav />
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/tags" exact component={Tags}></Route>
            <Route path="/follow" exact component={Follow}></Route>
            <Route path="/tags/study" exact component={StudyTag}></Route>
            <Route path="/tags/chinesefood" exact component={ChineseFood}></Route>
            <Route path="/tags/travel" exact component={Travel}></Route>
            <Route path="/tags/fruit" exact component={Fruit}></Route>
            <Route path="/tags/relax" exact component={Relax}></Route>
            <Route path="/blogs/java" exact component={java}></Route>
            <Route path="/blogs/dumplings" exact component={dumplings}></Route>
            <Route path="/blogs/newyork" exact component={newyork}></Route>
            <Route
                path="/blogs"
                   exact
                   render={() => <Blogs content={externalContent}/>}>
            </Route>
            <Route component={Error}></Route>
        </Switch>
    </Router>
  );
}

export default App;
