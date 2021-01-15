import React from "react";
import Home from "./components/Home";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
