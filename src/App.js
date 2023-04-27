import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Hamburger from "./components/Hamburger";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import About from "./components/About";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <Hamburger />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/notfound" component={NotFound} />
          <Route exact path="/" component={Landing} />
          <Redirect to="/notfound" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
