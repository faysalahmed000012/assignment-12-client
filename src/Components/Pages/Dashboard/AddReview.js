import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.config";
import axiosPrivate from "../../api/axiosSecret";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgStoreKey = "ff8cfeb26ce27734faaa78285e56b05a";
  const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;

          const review = {
            name: data.name,
            email: data.email,
            ratings: data.ratings,
            image: image,
            description: data.description,
          };

          axiosPrivate
            .post("http://localhost:5000/reviews", review)
            .then((res) => {
              console.log(res);
              reset();
              toast.success("reaview added");
            });
        }
      });
  };
  return (
    <div>
      <h3 className="text-center my-4 text-2xl font-sans font-semibold">
        Add a review
      </h3>

      <div className="flex items-center justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-centre">Give Your Review Here!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  readOnly
                  value={user?.displayName}
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  readOnly
                  value={user?.email}
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Ratings</span>
                </label>
                <input
                  {...register("ratings", {
                    required: {
                      value: true,

                      message: "Ratings is Required",
                    },
                  })}
                  type="number"
                  placeholder="Give Your Ratings"
                  min={1}
                  max={5}
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.ratings?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.ratings.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Picture</span>
                </label>
                <input
                  {...register("image", {
                    required: {
                      value: true,
                      message: "image is Required",
                    },
                  })}
                  type="file"
                  placeholder=""
                  className="input input-bordered w-full max-w-xs cursor-pointer"
                />{" "}
                <label className="label">
                  {errors.image?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.image.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  {...register("description", {
                    required: {
                      value: true,

                      message: "Description is Required",
                    },
                  })}
                  placeholder="Description is Required"
                  className="textarea textarea-bordered w-full max-w-xs"
                ></textarea>
                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn btn-accent w-full max-w-xs text-white"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto "></div>
    </div>
  );
};

export default AddReview;
