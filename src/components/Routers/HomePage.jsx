import React from "react";
import Banner1 from "../Banner/Banner1";
import Banner2Carousel from "../Banner/Banner2Carousel";
import HeadingCurated from "../CuratedForYou/HeadingCurated";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HeadingOurEvents from "../OurEvents/HeadingOurEvents";
import PurchaseBanner from "../PurchaseBanner/PurchaseBanner";
import Headings from "../ShopByCategory/Heading";
import HeadingOffer from "../TrendingOffers.jsx/HeadingOffer";
import ViewPort from "../Viewport/ViewPort";
import HeadingTrending from "../WhatsTrending/HeadingTrending";
import HeadingWorldBrands from "../WorldBrands/HeadingWorldBrands";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner1 />
      <Banner2Carousel />
      <ViewPort />
      <Headings />
      <HeadingOffer />
      <HeadingCurated />
      <PurchaseBanner />
      <HeadingTrending />
      <HeadingOurEvents />
      <HeadingWorldBrands />
      <Footer />
    </div>
  );
};

export default HomePage;
