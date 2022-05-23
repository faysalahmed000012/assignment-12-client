import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const {
    _id,
    price,
    picture,
    availableQuantity,
    minQuantity,
    maxQuantity,
    item,
    about,
  } = product;
  return (
    <div>
      <h3>The product is : {item}</h3>
    </div>
  );
};

export default Purchase;
