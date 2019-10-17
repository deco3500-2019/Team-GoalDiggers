import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Code from "./components/Code";
import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Login} />
    <Route path="/code" exact component={Code} />
    <Route path="/join" exact component={Join} />
    <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
