import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./scss/main.scss";

import Home from "./screens/home";
import About from "./screens/about";
import Work from "./screens/work";
import Contact from "./screens/contact";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
