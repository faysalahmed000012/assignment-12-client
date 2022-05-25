import React from "react";
import factory from "../../../assets/image/factory.jpg";

const InfoBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen mt-36 px-5 lg:px-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src={factory}
              className="rounded-lg shadow-2xl w-full lg:w-10/12 mx-auto"
              alt=""
            />
          </div>
          <div className="flex-1 p-4">
            <h1 className="text-5xl text-gray-600 font-bold">
              Why Choose Us ?
            </h1>
            <p className="py-6">
              You need to know why you should choose us.We are making electric
              tools sinc 1992. We have years of expreance of making those thing
              on these years we have continue improving ourselves and now we can
              assure that we can offer the best product at the best deal. We
              make our products carefully and always make sure that our clients
              are happy. See our business reputation bellow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
