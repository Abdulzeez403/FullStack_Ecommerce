import React, { useEffect, useState } from "react";
import { CarouselPage } from "./components/carousel";
import TopProduct from "./components/topProduct";
import { Product } from "./components/product";
import { useProductContext } from "@/modules/Dashboard/Product/context";


const Detail = () => {
  const { products, GetProducts } = useProductContext();


  useEffect(() => {
    GetProducts();
  }, [])


  return (
    <div className="my-4 ">
      <div>
        <CarouselPage />
      </div>
      <TopProduct />
      <Product products={products} />
    </div>
  );
};

export default Detail;
