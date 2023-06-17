import React from "react";
import { CarouselPage } from "./components/carousel";
import TopProduct from "./components/topProduct";
import { Product } from "./components/product";

const Detail = () => {
  return (
    <div className="  my-4 ">
      <CarouselPage />
      <TopProduct />
      <Product/>
    </div>
  );
};

export default Detail;
