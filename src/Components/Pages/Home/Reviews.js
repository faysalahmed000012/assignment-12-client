import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../Shared/Loading/Loading";

const Reviews = () => {
  const { data, isLoading, refetch } = useQuery("review", () =>
    axios.get("http://localhost:5000/reviews")
  );
  const reviews = data?.data;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3>All Reviews Here: {reviews.length}</h3>
    </div>
  );
};

export default Reviews;
