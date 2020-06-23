import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div className="main">
      <Header />
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
        <Footer />
        </div>
    </Router>
  
  );
}
