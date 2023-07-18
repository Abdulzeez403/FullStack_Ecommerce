import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IProduct } from "./models";

interface IProp {
  products: IProduct[];
  CreateProduct: (values: IProduct) => Promise<void>;
}

const ProductContext = createContext<IProp>({
  products: [] || null,
  CreateProduct(values) {
    return null as any;
  },
});
export const useProductContext = () => {
  let context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("app dispatch must be used within app global provider");
  }
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const ProductProvder: React.FC<IProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const CreateProduct = async (values: IProduct) => {
    try {
      await fetch(` http://localhost:5000/api/product/product`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values)
      }
      )
        .then((data) => {
          setProducts(data as any);
          toast.success("Product Successfully");
        });
    } catch (err) {
      console.log(err);

    }
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        CreateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
