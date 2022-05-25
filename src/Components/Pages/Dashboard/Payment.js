import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axiosPrivate from "../../api/axiosSecret";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51L0g1HL4P8YMieG1lSyrMnnpUgE6caNCRRkjb9wy5Pm2yNWw5DhJAPN7novmyEtvFkRADtqFDVoKSzCWQvKw2oqx00VDR8xvMH"
);

const Payment = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery("order", () =>
    axiosPrivate.get(`http://localhost:5000/order/${id}`)
  );
  const order = data?.data;

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              Complete payment for{" "}
              <span className="text-primary">{order.item}</span>
            </h2>
            <p>Quantity : {order.quantity}</p>
            <p>Total Price :$ {order.price}</p>
            <p className="text-yellow-500">
              NOTE: Keep Your Transaction Id After Payment
            </p>
            <div class="divider"></div>

            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
