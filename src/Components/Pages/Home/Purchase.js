import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(`http://localhost:5000/product/${id}`).then((res) => res.json())
  );

  if (isLoading || loading) {
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
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="product"
          />
          <div>
            <h1 class="text-5xl font-bold">Hello {user?.displayName} !!!</h1>
            <h1 class="text-5xl font-bold">
              Want to buy <span>{item} ?</span>
            </h1>
            <h3 className="text-3xl my-3">Detail About That Product</h3>
            <div class="divider"></div>
            <p>Price Per Unit: {price}</p>
            <p>Available Quantity: {availableQuantity}</p>
            <p>Minium Order Quantity: {minQuantity}</p>
            <p class="py-6">{about}</p>
            <p>Order:-</p>
            <div class="form-control">
              <input
                name="orderQuantity"
                type="number"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs mt-4 mb-2"
                min={minQuantity}
              />
              <p>Your Price: {price * 100} </p>
            </div>
            <p className="text-xs text-yellow-500 mb-4">
              You Can not order less than Minimum Quantity or more than
              Available Quantity
            </p>
            <button class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
