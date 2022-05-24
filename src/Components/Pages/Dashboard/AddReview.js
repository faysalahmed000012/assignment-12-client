import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import axiosPrivate from "../../api/axiosSecret";

const AddReview = () => {
  const [user] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const imgStoreKey = "ff8cfeb26ce27734faaa78285e56b05a";
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;

    const image = event.target.image.value;
    var file = image.split("\\");
    var fileName = file[file.length - 1];
    console.log(fileName);
    const formData = new FormData();
    formData.append("image", fileName);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          // const img = result.data.url;
          // const review = {
          //   name: user?.displayName,
          //   email: user?.email,
          //   ratings: event.target.ratings.value,
          //   image: img,
          //   comment: event.target.comment.value,
          // };
          // axiosPrivate
          //   .post("http://localhost:5000/reviews", review)
          //   .then((response) => console.log(response));
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
            <form onSubmit={handleSubmit} action="">
              <label class="label">Your Name:-</label>
              <input
                type="text"
                name="name"
                readOnly
                placeholder="Type here"
                value={user?.displayName}
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">Your Email:-</label>
              <input
                type="email"
                name="email"
                readOnly
                value={user?.email}
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">Give Your Picture:-</label>

              <input
                name="image"
                type="file"
                class="input input-bordered w-full max-w-xs "
              />
              <label class="label">Ratings Out Of 5:-</label>
              <input
                name="ratings"
                type="number"
                max={5}
                min={0}
                class="input input-bordered w-full max-w-xs"
              />

              <label class="label">Your Comment:-</label>
              <textarea
                name="comment"
                class="textarea textarea-bordered block w-full mb-4"
                placeholder="Write Your Comment Here"
              ></textarea>
              <div class="card-actions justify-center">
                <button type="submit" class="btn btn-primary">
                  POST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto "></div>
    </div>
  );
};

export default AddReview;
