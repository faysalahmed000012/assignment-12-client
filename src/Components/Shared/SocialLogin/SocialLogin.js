import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.config";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-red-700 text-sm my-1">{error.message}</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="divider my-5">OR</div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-accent block mx-auto"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
