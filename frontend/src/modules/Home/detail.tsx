import React from "react";
import { Header } from "./components/header";
import { CarouselPage } from "./components/carousel";
import { Category } from "./components/category";
import TopProduct from "./components/topProduct";
import { Product } from "./components/product";
import { Footer } from "./components/footer";

const Detail = () => {
  return (
    <div className="  my-4 ">
      <Header />
      <Category />
      <CarouselPage />
      <TopProduct />
      <Product/>
      <Footer/>
    </div>
  );
};

export default Detail;
