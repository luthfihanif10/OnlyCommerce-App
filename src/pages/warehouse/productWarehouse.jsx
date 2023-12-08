/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export const ProductWarehouse = (props) => {
  const { id_produk, nama_produk, jumlah_produk, harga, blok } = props.isiData;
  
  return (
    <div className="product">
      <img src={`/src/assets/products/${id_produk}.png`}/>
      <div className="description">
        <p>
          <b>{nama_produk}</b>
        </p>
        <p>Stock: {jumlah_produk}</p>
        <p> Rp{harga}</p>
      </div>
      
      <button className="addToCartBttn">
        Update
      </button>
    </div>
  );
};
