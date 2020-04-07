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


const externalContent = {
    title: "#This is my Blog#",
    author: "Haiwei Liu",
    date: "4/6/2020",
    text: "Some students study for the examination. " +
        "The student is thinking to himself, “How will I repeat this back when I am asked a certain question?” " +
        "or “How will I pass the examination?” That is complete folly, " +
        "but unfortunately is what many students have done in a university.\n"
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
