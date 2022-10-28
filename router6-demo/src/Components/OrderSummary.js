import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p>Order Confirmed!</p>
      </div>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      {/* <button onClick={()=>navigate(-1, { replace: true })}>Go Back</button> */}
    </>
  );
};

export default OrderSummary;
