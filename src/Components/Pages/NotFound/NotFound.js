import React from "react";
import notFound from "../../../assets/image/notfound.webp";

const NotFound = () => {
  return (
    <div className="min-w-screen">
      <h3 className="text-red-500 text-center">
        The page you are looking for is not found
      </h3>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
