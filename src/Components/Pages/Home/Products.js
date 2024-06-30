import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Product from "./Product";

const Products = () => {
  const { data, isLoading, refetch } = useQuery("products", () =>
    axios.get("http://localhost:5000/products")
  );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  const products = data?.data;

  return (
    <div className="container mx-auto mt-5">
      <h3 className="text-center text-4xl text-primary font-semibold">
        Our Products : {products?.length}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {products?.map((product) => (
          <Product key={product?._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
