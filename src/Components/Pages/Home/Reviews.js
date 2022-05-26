import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";

const Reviews = () => {
  const { data, isLoading, refetch } = useQuery("review", () =>
    axios.get("https://secure-tundra-52994.herokuapp.com/reviews")
  );

  const reviews = data?.data;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-auto">
      <h3 className="text-center text-2xl text-primary my-5">Reviews</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {reviews.slice(0, 6).map((review) => {
          return (
            <div key={review._id} className="mx-auto">
              <div style={{ height: "420px" }} className="card w-96 border-2 ">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.picture} alt="user" />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-accent">{review.name}</h2>
                  <p className="text-xl font-sans font-bold text-gray-500">
                    {review.ratings} out of 5
                  </p>
                  <p className="text-xl font-sans">{review.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
