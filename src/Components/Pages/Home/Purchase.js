import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import { useForm } from "react-hook-form";
import axios from "axios";
import axiosPrivate from "../../api/axiosSecret";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  // const { data, isLoading, refetch } = useQuery("product", () =>
  //   axiosPrivate
  //     .get(`http://localhost:5000/product/${id}`)

  // );
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }
  // const product = data?.data;
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
    const order = {
      name: event.target.name.value,
      email: event.target.email.value,
      item: item,
      quantity: quantity,
      price: (price * 10 * (event.target.quantity.value * 10)) / 100,
      phone: event.target.phone.value,
      address: event.target.address.value,
      status: "unpaid",
    };
    const newQuantity = availableQuantity - quantity;

    // const data = axios.post("http://localhost:5000/orders", order);
    console.log(order);
  };

  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="product"
          />
          <div>
            <h1 class="text-4xl font-bold">
              Hello <span className="text-primary">{user?.displayName}</span>{" "}
              !!!
            </h1>
            <h1 class="text-4xl font-bold">
              Want to buy <span className="text-primary">{item} ?</span>
            </h1>
            <h3 className="text-3xl my-3">Detail About That Product</h3>
            <div class="divider"></div>
            <p>Price Per Unit: {price}</p>
            <p>Available Quantity: {availableQuantity}</p>
            <p>Minium Order Quantity: {minQuantity}</p>
            <p class="py-6">{about}</p>
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
                class="input input-bordered w-full max-w-xs"
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
                class="input input-bordered w-full max-w-xs"
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
                class="input input-bordered w-full max-w-xs"
              />
              <label htmlFor="quantity" className="label text-xs ">
                <span className="text-yellow-600">
                  {" "}
                  You Can not order less than Minimum Order Quantity or more
                  than Available Quantity
                </span>
                <span className="text-red-500">{error}</span>
              </label>

              <label htmlFor="phone" className="label">
                Your Phone Number :-
              </label>

              <input
                type="number"
                name="phone"
                class="input input-bordered w-full max-w-xs"
                id=""
                placeholder="Phone Number"
                required
              />
              <label htmlFor="address" className="label">
                Your Address :-
              </label>
              <textarea
                class="textarea textarea-bordered w-full block mb-3"
                placeholder="Address"
                name="address"
                required
              ></textarea>
              <button
                type="submit"
                disabled={disabled}
                class={`btn btn-primary`}
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
