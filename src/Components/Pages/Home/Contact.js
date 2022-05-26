import React from "react";

const Contact = () => {
  return (
    <div className="mt-14 py-16 px-9 bg-gray-700">
      <h2 className="text-center text-primary text-xl font-semibold">
        Contact Us
      </h2>
      <h3 className="text-center text-4xl text-white">
        Stay connected with us
      </h3>

      <div className="flex flex-col lg:items-center  justify-center">
        <form className="mt-10 px-auto lg:px-0" action="">
          <input
            type="text"
            placeholder="Your Name"
            className="input block mx-auto lg:inline input-bordered border-primary w-full"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="input block mx-auto lg:inline  input-bordered border-primary w-full my-5"
          />
          <textarea
            className="textarea  mx-auto  textarea-bordered border-primary w-full block mb-5"
            placeholder="Your Message"
          ></textarea>
          <button
            className="btn  rounded-md text-white font-bold uppercase btn-secondary block mx-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
