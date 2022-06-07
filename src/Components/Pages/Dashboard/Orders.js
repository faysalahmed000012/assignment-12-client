import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";

const Orders = () => {
  const { data, isLoading, refetch } = useQuery("orders", () =>
    axiosPrivate.get(`http://localhost:5000/orders`)
  );
  const orders = data?.data;

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleShipped = (id) => {
    axiosPrivate.put(`http://localhost:5000/order/paid/${id}`).then((res) => {
      console.log(res);
      toast.success("product status changed to shipped");
      refetch();
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Canceled!", "Your order has been canceled.", "success");
        axiosPrivate
          .delete(`http://localhost:5000/order/${id}`)
          .then((res) => console.log(res));
        refetch();
      }
    });
  };
  return (
    <div>
      <h3>All Orders here : {orders.length}</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>{order.status}</td>
                  {order.status === "unpaid" && (
                    <>
                      <td>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="btn btn-xs bg-red-500 border-0"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  )}
                  {order.status === "paid" && (
                    <>
                      <td>
                        <button
                          onClick={() => handleShipped(order._id)}
                          className="btn btn-primary btn-xs"
                        >
                          Shipped?
                        </button>
                      </td>
                    </>
                  )}
                  {order.status === "shipped" && (
                    <>
                      <td className="text-green-500">shipped</td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
