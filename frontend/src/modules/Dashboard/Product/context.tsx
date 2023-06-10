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
      await axios
        .post(`http://localhost:5000/api/product`, values, {
          headers: { "Content-Type": "application/json" },
        }
        )
        .then((data) => {
          setProducts(data?.data);
          toast.success("Product Successfully");
        });
    } catch (error) {
      console.error(error);
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
