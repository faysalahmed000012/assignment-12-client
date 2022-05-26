import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";
import Products from "../Home/Products";

const ManageProducts = () => {
  const { data, isLoading, refetch } = useQuery("products", () =>
    axios.get(`https://secure-tundra-52994.herokuapp.com/products`)
  );
  const products = data?.data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed!", "This Item Has Been Removed.", "success");
        axiosPrivate
          .delete(`https://secure-tundra-52994.herokuapp.com/product/${id}`)
          .then((res) => console.log(res));
        refetch();
      }
    });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>All Products Here : {products.length}</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Min Order Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>{product.item}</td>
                  <td>{product.price}</td>
                  <td>{product.availableQuantity}</td>
                  <td>{product.minQuantity}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="btn btn-accent btn-xs"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
