import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/productData";
import tycoonData from "../data/tycoonData";
import Product from "./Product";

function ProductList() {
  const { id } = useParams();
  const selectedTycoon = tycoonData.find((tycoon) => tycoon.id == id);

  const [productCount, setProductCount] = useState(
    new Array(productData.length).fill(0)
  );
  const [leftMoney, setLeftMoney] = useState(selectedTycoon.wealth);

  function handleBuyClick(id, price) {
    if (price <= leftMoney) {
      setLeftMoney((prevLeftMoney) => prevLeftMoney - price);
      setProductCount((prevProductCount) => {
        let newProductCount = [...prevProductCount];
        newProductCount[id] += 1;
        return newProductCount;
      });
    } else {
      //not enough money code[alert]
    }
  }

  function handleSellClick(id, price) {
    if (productCount[id] > 0) {
      setLeftMoney((prevLeftMoney) => prevLeftMoney + price);
      setProductCount((prevProductCount) => {
        let newProductCount = [...prevProductCount];
        newProductCount[id] -= 1;
        return newProductCount;
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
        productAmount={productCount[product.id]}
        handleBuyClick={handleBuyClick}
        handleSellClick={handleSellClick}
      />
    );
  });

  return (
    <div>
      <h1 className="left-money">$ {leftMoney}</h1>
      <div className="product-list">{products}</div>
    </div>
  );
}

export default ProductList;
