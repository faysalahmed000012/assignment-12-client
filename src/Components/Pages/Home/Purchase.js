import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import { useForm } from "react-hook-form";
import axios from "axios";
import axiosPrivate from "../../api/axiosSecret";
import { toast } from "react-toastify";
import useAdmin from "../../../Hooks/useAdmin";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { data, isLoading, refetch } = useQuery("product", () =>
    axiosPrivate.get(`https://secure-tundra-52994.herokuapp.com/product/${id}`)
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const product = data?.data;
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

  const handleQuantity = (event) => {
    const quantity = event.target.value;
    if (quantity < minQuantity || quantity > availableQuantity) {
      setError("Quantity Can Not Be Less Than Minimum or More Than Available");
      setDisabled(true);
    } else {
      setError("");
      setDisabled(false);
    }
  };

  const handleOrder = (event) => {
    event.preventDefault();

    const quantity = Number(event.target.quantity.value);
    const total = (price * quantity).toFixed(2);
    const order = {
      name: event.target.name.value,
      email: event.target.email.value,
      item: item,
      quantity: quantity,
      price: Number(total),
      phone: event.target.phone.value,
      address: event.target.address.value,
      status: "unpaid",
    };
    const newQuantity = availableQuantity - quantity;

    axios
      .post("https://secure-tundra-52994.herokuapp.com/orders", order)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Your Order Has Been Placed");

          event.target.quantity.value = 0;
          event.target.phone.value = 0;
          event.target.address.value = "";
          axiosPrivate
            .put(`https://secure-tundra-52994.herokuapp.com/product/${id}`, {
              newQuantity,
            })
            .then((res) => {
              console.log(res);
              refetch();
            });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="product"
          />
          <div>
            <h1 className="text-4xl font-bold">
              Hello <span className="text-primary">{user?.displayName}</span>{" "}
              !!!
            </h1>
            <h1 className="text-4xl font-bold">
              Want to buy <span className="text-primary">{item} ?</span>
            </h1>
            <h3 className="text-3xl my-3">Detail About That Product</h3>
            <div className="divider"></div>
            <p>Price Per Unit: {price}</p>
            <p>Available Quantity: {availableQuantity}</p>
            <p>Minium Order Quantity: {minQuantity}</p>
            <p className="py-6">{about}</p>
            <p className="text-2xl font-bold text-primary">Order:-</p>

            <form onSubmit={handleOrder}>
              <label htmlFor="name" className="label">
                Your Name :-
              </label>
              <input
                type="text"
                name="name"
                readOnly
                id=""
                className="input input-bordered w-full max-w-xs"
                value={user?.displayName}
              />
              <label htmlFor="email" className="label">
                Your Email :-
              </label>

              <input
                type="email"
                name="email"
                readOnly
                id=""
                className="input input-bordered w-full max-w-xs"
                value={user?.email}
              />
              <label htmlFor="quantity" className="label">
                Order Quantity :-
              </label>

              <input
                type="number"
                onChange={handleQuantity}
                placeholder={minQuantity}
                name="quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="quantity" className="label text-xs ">
                <span className="text-yellow-600">
                  {" "}
                  You Can not order less than Minimum Order Quantity or more
                  than Available Quantity
                </span>
              </label>
              <label htmlFor="quantity" className="label text-xs ">
                <span className="text-red-500">{error}</span>
              </label>

              <label htmlFor="phone" className="label">
                Your Phone Number :-
              </label>

              <input
                type="number"
                name="phone"
                className="input input-bordered w-full max-w-xs"
                id=""
                placeholder="Phone Number"
                required
              />
              <label htmlFor="address" className="label">
                Your Address :-
              </label>
              <textarea
                className="textarea textarea-bordered w-full block mb-3"
                placeholder="Address"
                name="address"
                required
              ></textarea>
              {admin && (
                <p className="text-red-500">Admin Can not buy anything</p>
              )}
              <button
                type="submit"
                disabled={admin || disabled}
                className={`btn btn-primary`}
              >
                Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
