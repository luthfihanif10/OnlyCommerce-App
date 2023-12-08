/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
// import * as productImage from "../../assets/products";

export const ProductCustomer = (props) => {
  const { id_produk, nama_produk, jumlah_produk, harga, blok } = props.isiData;

  return (
    <div className="productCustomer">
      <img src={`/src/assets/products/${id_produk}.png`} />
      <div className="description">
        <p>
          <b>{nama_produk}</b>
        </p>
        <p>Posisi: {blok}</p>
        <p> Rp{harga}</p>
      </div>
    </div>
  );
};
