import "./App.css";
import Banner1 from "./components/Banner/Banner1";
import Banner2 from "./components/Banner/Banner2";
import HeadingCurated from "./components/CuratedForYou/HeadingCurated";
import Navbar from "./components/Navbar/Navbar";
import HeadingOurEvents from "./components/OurEvents/HeadingOurEvents";
import PurchaseBanner from "./components/PurchaseBanner/PurchaseBanner";
import Headings from "./components/ShopByCategory/Heading";
import HeadingOffer from "./components/TrendingOffers.jsx/HeadingOffer";
import ViewPort from "./components/Viewport/ViewPort";
import HeadingTrending from "./components/WhatsTrending/HeadingTrending";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner1 />
      <Banner2 />
      <ViewPort />
      <Headings />
      <HeadingOffer />
      <HeadingCurated />
      <PurchaseBanner />
      <HeadingTrending />
      <HeadingOurEvents />
    </div>
  );
}

export default App;
