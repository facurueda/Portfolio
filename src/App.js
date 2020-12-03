import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Background from "./views/Background";
import FullPage from "./views/FullPage";

function App() {
      return (
            <Router>
                  <Background/>
                  <Switch>
                        <Route path='/' exact component={FullPage} />

                  </Switch>
            </Router>
      )
}

export default App;
