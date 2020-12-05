import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Background from "./views/Background";
import FullPage from "./views/FullPage";
import PageProyects from "./views/PageProyects";

function App() {
      return (
            <Router>
                  <Background/>
                  <Switch>
                        <Route path='/' exact component={FullPage}/>
                        <Route path='/Proyects' component={PageProyects}/>

                  </Switch>
            </Router>
      )
}

export default App;
