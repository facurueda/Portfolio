import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Background from "./views/Background";
import FullPage from "./views/FullPage";
import PageProjects from "./views/PageProjects";

function App() {
      return (
            <Router>
                  <Background/>
                  <Switch>
                        <Route path='/' exact component={FullPage}/>
                        <Route path='/Projects' component={PageProjects}/>

                  </Switch>
            </Router>
      )
}

export default App;
