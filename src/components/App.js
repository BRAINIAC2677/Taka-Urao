import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import TycoonList from "./TycoonList";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <nav>
        <button>
          <Link to="/Taka-Urao">Home</Link>
        </button>
      </nav>

      <Switch>
        <Route exact path="/Taka-Urao">
          <div>
            <TycoonList />
          </div>
        </Route>
        <Route path="/Taka-Urao/:id">
          <div>
            <ProductList />
          </div>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
