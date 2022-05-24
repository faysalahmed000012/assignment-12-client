import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.config";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const url = `http://localhost:5000/orders/${email}`;
  const { data, isLoading, refetch } = useQuery("myOrders", () =>
    axiosPrivate.get(url)
  );
  const orders = data?.data;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>All of my orders here : {orders.length}</h3>

      <div class="overflow-x-auto">
        <table class="table w-full">
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
            {orders.map((order, index) => {
              return (
                <tr key={order._id}>
                  <th>{index + 1}</th>
                  <td>{order.name}</td>

                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  {order.status === "unpaid" && (
                    <>
                      <td>
                        <button className="btn btn-xs btn-accent">pay</button>
                      </td>
                      <td>
                        <button className="btn btn-xs btn-accent">
                          Cancel
                        </button>
                      </td>
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
