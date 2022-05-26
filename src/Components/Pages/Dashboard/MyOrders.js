import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.config";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  const url = `https://secure-tundra-52994.herokuapp.com/orders/${email}`;
  const { data, isLoading, refetch } = useQuery("myOrders", () =>
    axiosPrivate.get(url)
  );
  const orders = data?.data;
  if (isLoading) {
    return <Loading></Loading>;
  }

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
          .delete(`https://secure-tundra-52994.herokuapp.com/order/${id}`)
          .then((res) => console.log(res));
        refetch();
      }
    });
  };
  return (
    <div>
      <h3>All of my orders here : {orders?.length}</h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>

              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => {
              return (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>

                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  {order.status === "unpaid" ? (
                    <>
                      <td>
                        <button
                          onClick={() =>
                            navigate(`/dashboard/payment/${order._id}`)
                          }
                          className="btn btn-xs btn-accent"
                        >
                          pay
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="btn btn-xs btn-accent"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>transactionId: {order.transactionId}</td>
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

export default MyOrders;
