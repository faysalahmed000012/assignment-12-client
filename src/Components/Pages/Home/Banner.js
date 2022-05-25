import React from "react";
import bannerImg from "../../../assets/image/bannerImg.jpg";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse gap-x-8">
          <div className="flex-1">
            <img src={bannerImg} alt="" class="rounded-lg shadow-2xl " />
          </div>
          <div className="flex-1">
            <h1 class="text-5xl font-bold">
              Electronic Toos At <br />
              Best Deal!
            </h1>
            <p class="py-6">
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
