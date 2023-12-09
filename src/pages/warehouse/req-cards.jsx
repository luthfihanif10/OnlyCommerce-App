import { useState } from "react";
import axios from "axios";

function ReqCards({ data }) {
  const { id, produk, jumlah: amount, status_request: status } = data;
  const productId = produk?.id_produk;
  const productName = produk?.nama_produk;
  const productImage = `/src/assets/products/${productId}.png`;

  const [request, setRequest] = useState({
    id,
    productId,
    productName,
    amount,
    productImage,
    status,
  });

  function handleStatusChange(id) {
    if (request.status == "requested") {
      axios
        .put(`https://onlycommerce.onrender.com/v1/requests/${id}`, {
          status: "confirmed",
        })
        .then((res) => {
          console.log(res);
          setRequest({
            ...request,
            status: "confirmed",
          });
        })
        .catch((error) => console.log(error));
    } else if (request.status == "confirmed") {
      axios
        .put(`https://onlycommerce.onrender.com/v1/requests/${id}`, {
          status: "checking",
        })
        .then((res) => {
          console.log(res);
          setRequest({
            ...request,
            status: "checking",
          });
        })
        .catch((error) => console.log(error));
    } else if (request.status == "checking") {
      axios
        .put(`https://onlycommerce.onrender.com/v1/requests/${id}`, {
          status: "checked",
        })
        .then((res) => {
          console.log(res);
          setRequest({
            ...request,
            status: "checked",
          });
          location.reload();
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <div className="req-cards">
      <img src={productImage} />
      <div className="info">
        <b>{productName}</b>
        <div>
          <p>Id: {productId}</p>
          <p>Amount: {amount}</p>
        </div>
        <div className="stats">Status:</div>
        <div>
          <button className="button" onClick={() => handleStatusChange(id)}>
            {request.status}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReqCards;
