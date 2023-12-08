import axios from "axios";
import React, { useEffect, useState } from 'react'
import { ProductWarehouse } from "./productWarehouse";
import "./shopWarehouse.css";
import { NavbarWarehouse } from "../../components/navbarWarehouse";

export const ShopWarehouse = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/products')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

  return (
    <div>
      <NavbarWarehouse/>
      <div className="shop">
        <div className="shopTitle">
          <h1>OnlyCommerce Product</h1>
        </div>

        <div className="products">
          {data.map((product) => (
            <ProductWarehouse data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
