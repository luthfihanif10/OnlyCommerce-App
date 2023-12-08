import React from "react";
import { STATUS } from "../../requestings";

function ReqCards(props) {
  const { id, productId, productName, amount, productImage } = props.data;
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
          <select className="form-select" onSelect={handleSelect}>
            {STATUS.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ReqCards;

function handleSelect(event) {
  setValue(event.target.value);
}
