import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axiosPrivate from "../../api/axiosSecret";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [user, loading] = useAuthState(auth);

  const { _id, price } = order;

  useEffect(() => {
    axiosPrivate
      .post("http://localhost:5000/create-payment-intent", {
        price,
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        }
      });
  }, [price]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setProcessing(false);
      setTransactionId(paymentIntent.id);
      setSuccess("Congratulation!! You have successfully done your payment");
      toast.success("Congratulation!! Your Payment Id Done");

      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };
      axiosPrivate
        .put(`http://localhost:5000/order/${_id}`, payment)
        .then((res) => {
          console.log(res);
          console.log(order);
          setProcessing(false);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm my-3 text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 my-1">{cardError}</p>}
      {success && (
        <div className=" my-1">
          <p className="text-green-500">{success}</p>
          <p>
            Transaction Id:{" "}
            <span className="text-secondary font-semibold">
              {transactionId}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
