/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context";
import axios from "axios";

export const Product = (props) => {
  const arrProducts = props.arrData;
  const { id_produk, nama_produk, jumlah_produk, harga } = props.isiData;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const cartItemCount = cartItems[id_produk];

  const getObjectId = (idProd) => {
    let retVal = null;
    for (let i = 0; i < arrProducts.length; ++i) {
      if (arrProducts[i].id_produk === idProd) {
        retVal = arrProducts[i].id;
      }
    }
    return retVal;
  }

  const createRequest = () => {
    console.log("id produk: " + id_produk);
    console.log("item count: " + cartItemCount);
    console.log("id Objek: " + getObjectId(id_produk));
    
    
    const data = {
      produk: getObjectId(id_produk),
      jumlah: cartItemCount
    }

    axios.post('https://onlycommerce.onrender.com/v1/requests', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('post success: ', res);
    })
    .catch(err => {
      console.log('err: ', err.response);
    })
  }

  return (
    <div className="product">
      <img src={`/src/assets/products/${id_produk}.png`} />
      <div className="description">
        <p>
          <b>{nama_produk}</b>
        </p>
        <p>Stock: {jumlah_produk}</p>
      </div>

      <div className="countHandler">
          <button onClick={() => removeFromCart(id_produk)}> - </button>
            <input
              value={cartItems[id_produk]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id_produk)}
            />
          <button onClick={() => addToCart(id_produk)}> + </button>
        </div>
      
      <button id={`btn${id_produk}`} className="addToCartBttn" onClick={createRequest}>
        Request {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
