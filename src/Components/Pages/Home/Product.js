import React from "react";

const Product = ({ product }) => {
  const {
    price,
    picture,
    availableQuantity,
    minQuantity,
    maxQuantity,
    item,
    about,
  } = product;
  return (
    <div className="mx-auto">
      <div
        style={{ height: "696px" }}
        class="card lg:max-w-auto  bg-base-100 shadow-xl"
      >
        <figure>
          <div style={{ width: "300px", height: "300px" }}>
            <img className="overflow-hidden" src={picture} alt="tools" />
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">{item}!</h2>
          <p>Per Unit Price: {price}</p>
          <p>Available: {availableQuantity}</p>
          <p>Minimum Order Quantity: {minQuantity}</p>
          <p>{about}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
