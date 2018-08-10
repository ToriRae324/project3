import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./pages/Browse"
import HeaderNav from './components/HeaderNav';
import MyStuff from "./pages/MyStuff"


const App = () => (
  <Router>

    <div className="Container">
      <HeaderNav />
      <Switch>
      <Route exact path="/" component={Browse} />
      <Route path="/browse" component={Browse} />
      <Route path="/mystuff" component={MyStuff} /> 
      </Switch>
    </div>

  </Router>
);

export default App;

