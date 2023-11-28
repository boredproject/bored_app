import React from "react";
import ProductPage from "./ProductPage";
import Navigation from "../homepage/Navigation/Navigation";
import WaveFooter from "../homepage/Footer/WaveFooter";

const ProdPage = ({ restaurants }: { restaurants: string[] }) => {
  return <div>
    <Navigation />
    <ProductPage restaurants={restaurants} />
    <WaveFooter />
  </div>;
};

export default ProdPage;
