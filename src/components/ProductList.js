import React, { useState } from "react";
import productData from "../data/productData";
import Product from "./Product";

function ProductList() {
  let productCount = productData.map((product) => {
    return 0;
  });

  const [count, setCount] = useState(productCount);
  const [leftMoney, setLeftMoney] = useState(100000000);

  function handleBuyClick(id, price) {
    if (price <= leftMoney) {
      setLeftMoney((prevLeftMoney) => prevLeftMoney - price);
      setCount((prevCount) => {
        let newCount = [...prevCount];
        newCount[id] += 1;
        return newCount;
      });
    } else {
      //not enough money code[alert]
    }
  }

  function handleSellClick(id, price) {
    if (count[id] > 0) {
      setLeftMoney((prevLeftMoney) => prevLeftMoney + price);
      setCount((prevCount) => {
        let newCount = [...prevCount];
        newCount[id] -= 1;
        return newCount;
      });
    } else {
      //nothing to sell code[alert]
    }
  }

  const products = productData.map((product) => {
    return (
      <Product
        key={product.id}
        info={product}
        productAmount={count[product.id]}
        handleBuyClick={handleBuyClick}
        handleSellClick={handleSellClick}
      />
    );
  });
  return (
    <div className="product-list">
      <h1>ProductList</h1>
      <h1>{leftMoney}</h1>
      {products}
    </div>
  );
}

export default ProductList;
