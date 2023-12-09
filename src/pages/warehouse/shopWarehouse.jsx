/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { ProductWarehouse } from "./productWarehouse";
import "./shopWarehouse.css";
import Navbar from "../../components/navbar1";


export const ShopWarehouse = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://onlycommerce.onrender.com/v1/products')
      .then(result => {
        console.log('data API', result.data.data);

        setProducts(result.data.data);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }, [])

  return (
    <div>
      <Navbar role = "gudang"/>
      <div className="shop">
        <div className="shopTitle">
          <h1>OnlyCommerce Product</h1>
        </div>

        <div className="products">
          {products.map((product) => (
            <ProductWarehouse key={product.id_produk} isiData={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};
