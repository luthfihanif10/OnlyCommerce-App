import React from "react";

export const ProductWarehouse = (props) => {
  const { id, productName, amount, price, productImage } = props.data;
  
  return (
    <div className="product">
      <img src={productImage}/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Stock: {amount}</p>
        <p> Rp{price}</p>
      </div>
      
      <button className="addToCartBttn">
        Update
      </button>
    </div>
  );
};
