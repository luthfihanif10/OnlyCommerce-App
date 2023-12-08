import React from "react";
import { STATUS } from "../../requestings";
import Form from "react-bootstrap/Form";

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
          <Form.Select
            aria-label="Default select example"
            onSelect={handleSelect}
            size="sm"
          >
            {STATUS.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
        </div>
      </div>
    </div>
  );
}

export default ReqCards;

function handleSelect(event) {
  setValue(event.target.value);
}
