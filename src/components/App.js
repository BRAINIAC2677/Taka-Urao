import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProductList from "./ProductList";
import TycoonList from "./TycoonList";
import Footer from "./Footer";

import ar from "./data";

function App() {
  let n = ar.map((a) => {
    let obj = {
      id: a.key,
      name: a.title,
      price: a.price,
      imgUrl: `./assets/images/${a.image.slice(11)}`,
    };
    console.log(obj);
    return obj;
  });

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
            <TycoonList />
          </div>
        </Route>
        <Route path="/:id">
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
