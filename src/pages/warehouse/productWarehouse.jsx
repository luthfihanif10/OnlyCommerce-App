/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import axios from "axios";

export const ProductWarehouse = (props) => {
  const { id_produk, nama_produk, jumlah_produk, harga, blok, id } = props.isiData;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  
  const cartItemCount = cartItems[id_produk];

  const updateProduk = () => {
    console.log("id produk: " + id_produk);
    console.log("item count: " + cartItemCount);
    console.log("idObjek : " + id);

    try {
      const jumlahTotal = jumlah_produk + cartItemCount;

      if (jumlahTotal < 0) {
        throw new Error('Jumlah produk menjadi negatif. Gimanasih Quality Control! >:(');
      }

      const data = {
        jumlah_produk: jumlahTotal
      }

      axios.put(`https://onlycommerce.onrender.com/v1/products/${id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log('update success: ', res);
      })
      .catch(err => {
        console.log('err: ', err.response);
      })
      
      } catch(err) {
        console.log(err);
      }

    

    
  } 

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

      <div className="countHandler">
          <button onClick={() => removeFromCart(id_produk)}> - </button>
            <input
              value={cartItems[id_produk]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id_produk)}
            />
          <button onClick={() => addToCart(id_produk)}> + </button>
        </div>
      
      <button id={`btnWrh${id_produk}`} className="addToCartBttn" onClick={updateProduk}>
        Update {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
