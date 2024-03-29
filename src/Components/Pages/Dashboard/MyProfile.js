import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.config";
import axiosPrivate from "../../api/axiosSecret";
import Loading from "../../Shared/Loading/Loading";
import noUser from "../../../assets/image/no-user-image-icon-3.jpg";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const email = user.email;
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery("user", () =>
    axiosPrivate.get(`https://secure-tundra-52994.herokuapp.com/user/${email}`)
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const currentUser = data?.data;

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL || noUser} alt="user" />
              </div>
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-accent">{user.displayName}</h2>
            <p className="text-xl font-sans">{user.email}</p>
            <p className="text-xl font-sans">
              Education:- {currentUser?.education}
            </p>
            <p className="text-xl font-sans">
              Location:- {currentUser?.location}
            </p>
            <p className="text-xl font-sans">
              Phone Number:- {currentUser?.phone}
            </p>
            <a
              href={currentUser?.linkedIn}
              className="text-xl text-blue-600 font-sans"
            >
              {currentUser?.linkedIn && "LinkedIn"}
            </a>
            <div className="card-actions">
              <button
                onClick={() => navigate("/dashboard/edit")}
                className="btn btn-outline btn-success btn-xs"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
