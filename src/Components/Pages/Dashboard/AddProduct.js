import React from "react";
import { useForm } from "react-hook-form";
import axiosPrivate from "../../api/axiosSecret";
import { toast } from "react-toastify";

const AddProduct = () => {
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

          const product = {
            item: data.name,
            picture: image,
            price: data.price,
            availableQuantity: data.quantity,
            minQuantity: data.minQuantity,
            about: data.description,
          };

          axiosPrivate
            .post("http://localhost:5000/products", product)
            .then((res) => {
              console.log(res);
              reset();
              toast.success("Product Added Successfully");
            });
        }
      });
  };

  return (
    <div>
      <h3>Add A Product</h3>

      <div className="flex items-center justify-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-center">Write Product description</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                  type="text"
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price", {
                    required: {
                      value: true,

                      message: "Price is Required",
                    },
                  })}
                  type="number"
                  placeholder="Price"
                  min={1}
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  {...register("quantity", {
                    required: {
                      value: true,

                      message: "Quantity is Required",
                    },
                  })}
                  type="number"
                  placeholder="Quantity"
                  min={1}
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Min Order Quantity</span>
                </label>
                <input
                  {...register("minQuantity", {
                    required: {
                      value: true,

                      message: "Min Order Quantity is Required",
                    },
                  })}
                  type="number"
                  placeholder="Min Order Quantity"
                  min={1}
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  {errors.minQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.minQuantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Image</span>
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
                  placeholder="Description is Required "
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
    </div>
  );
};

export default AddProduct;
