import React from "react";

function Product(props) {
  const { id, name, imgUrl, price } = props.info;
  const { productAmount, handleBuyClick, handleSellClick } = props;

  return (
    <div className="product card">
      <div className="name">{name}</div>
      <img src={imgUrl} alt={name} />
      <div className="price">$ {price}</div>
      <button className="buy-btn" onClick={() => handleBuyClick(id, price)}>
        Buy
      </button>
      <div className="count">{productAmount}</div>
      <button className="sell-btn" onClick={() => handleSellClick(id, price)}>
        Sell
      </button>
    </div>
  );
}

export default Product;
