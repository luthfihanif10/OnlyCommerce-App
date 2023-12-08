import React from "react";

function ReqCardStore(props) {
  const { id, productId, productName, amount, productImage, status } =
    props.data;
  return (
    <div className="req-cards">
      <img src={productImage} />
      <div className="info">
        <b>{productName}</b>
        <div>
          <p>Id: {productId}</p>
          <p>Amount: {amount}</p>
          <p>
            Status: <strong>{status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReqCardStore;
