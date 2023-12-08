import React, { useState } from "react";

function ReqCards(props) {
  const { id, productId, productName, amount, productImage, status } =
    props.data;
  const [stase, setStase] = useState({
    id,
    productId,
    productName,
    amount,
    productImage,
    status,
  });

  function handleStase() {
    if (stase.status == "requested") {
      setStase({
        ...stase,
        status: "confirmed",
      });
    } else if (stase.status == "confirmed") {
      setStase({
        ...stase,
        status: "checking",
      });
    } else if (stase.status == "checking") {
      setStase({
        ...stase,
        status: "checked",
      });
    } else if (stase.status == "checked") {
      setStase({
        ...stase,
        status: "requested",
      });
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
          <button onClick={() => handleStase()}>{stase.status}</button>
        </div>
      </div>
    </div>
  );
}

export default ReqCards;
