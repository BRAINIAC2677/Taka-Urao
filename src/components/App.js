import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import TycoonList from "./TycoonList";

function App() {
  return (
    <div className="app">
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
      </nav>

      <Switch>
        <Route exact path="/">
          <div>
            <div className="title">
              <h1>compra tu sueño</h1>
              <p>
                Did you know that you are awesome. That's why you are given the
                chance to spend from the billionaires.
              </p>
            </div>
            <TycoonList />
          </div>
        </Route>
        <Route path="/:id">
          <div>
            <div className="title">
              <h1>es un sueño</h1>
              <p>Don't be shy. Buy what you want.</p>
            </div>
            <ProductList />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
