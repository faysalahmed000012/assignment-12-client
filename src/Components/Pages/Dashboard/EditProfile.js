import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.config";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";

const EditProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { data, isLoading, refetch } = useQuery("user", () =>
    axiosPrivate.get(`http://localhost:5000/user/${user.email}`)
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  const currentUser = data?.data;
  const onSubmit = (data) => {
    const update = {
      location: data.location || currentUser.location,
      phone: data.phone || currentUser.phone,
      education: data.education || currentUser.education,
      linkedIn: data.linkedIn || currentUser.linkedIn,
    };

    axiosPrivate
      .put(`http://localhost:5000/user/update/${user.email}`, update)
      .then((res) => {
        console.log(res);
        reset();
        refetch();
        toast.success("Your Profile Updated");
        navigate("/dashboard");
      });

    console.log(data);
  };
  return (
    <div>
      <h1>Edit Your Profile</h1>

      <div className="flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center">Edit Your Profile Here!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  {...register("education")}
                  type="text"
                  placeholder="Your Education"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  {...register("location")}
                  type="text"
                  placeholder="Your Location"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  {...register("phone")}
                  type="number"
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">LinkedIn</span>
                </label>
                <input
                  {...register("linkedIn")}
                  type="text"
                  placeholder="Your LinkedIn Profile Link"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
              </div>

              <input
                className="btn btn-accent w-full max-w-xs text-white mt-6"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
