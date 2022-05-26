import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import Contact from "./Contact";
import InfoBanner from "./InfoBanner";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <InfoBanner></InfoBanner>
      <BusinessSummery></BusinessSummery>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
