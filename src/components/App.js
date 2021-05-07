import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import TycoonList from "./TycoonList";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <TycoonList />
        </Route>
        <Route path="/:id">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
