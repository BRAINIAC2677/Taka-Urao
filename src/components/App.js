import React from "react";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import TycoonList from "./TycoonList";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <TycoonList />
          </Route>
          <Route path="/:id">
            <ProductList />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
