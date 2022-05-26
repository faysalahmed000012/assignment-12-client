import React from "react";
import bannerImg from "../../../assets/image/bannerImg.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-8">
          <div className="flex-1">
            <img src={bannerImg} alt="" className="rounded-lg shadow-2xl " />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Electronic Toos At <br />
              Best Deal!
            </h1>
            <p className="py-6">
              This is ElectroFrim , an electronic toos manufacturing company .
              We make electric tools like Electric Tester,Hammer,Soldering
              Iron,Electric Plas etc. We make our product best of quality and
              always try to satisfy our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
