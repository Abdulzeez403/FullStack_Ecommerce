import { useEffect } from "react";
import { useProductContext } from "../Dashboard/Product/context";
import { CarouselPage } from "./components/carousel";
import { Category } from "./components/category";
import { Product } from "./components/product.";
import TopCategory from "./components/topCategory";
import { TopProduct } from "./components/topProduct";



const Detail = () => {
  const { products, GetProducts } = useProductContext();


  useEffect(() => {
    GetProducts();
  }, [])


  return (
    <div className=" my-4 ">
      <div className="flex ">
        <Category />
        <CarouselPage />
      </div>
      <TopCategory />
      <TopProduct products={products} />
      <Product products={products} />
    </div>
  );
};

export default Detail;
