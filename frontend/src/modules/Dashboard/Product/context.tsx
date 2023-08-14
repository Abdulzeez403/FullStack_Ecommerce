import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IProduct } from "./models";

interface IProp {
  products: IProduct[];
  CreateProduct: (values: IProduct, UserId: any) => Promise<void>;
  GetProducts: () => void;
  GetProduct: (UserId: any) => void;
  UpdateProduct: (values: IProduct) => Promise<void>;

}

const ProductContext = createContext<IProp>({
  products: [] || null,
  CreateProduct(values, UserId) {
    return null as any;
  },
  UpdateProduct(values) {
    return null as any;
  },
  GetProducts() { },
  GetProduct(UserId) { }
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

  const CreateProduct = async (values: any, UserId: any) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/product/${UserId}`, {
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


  // @Get all the products
  const GetProducts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/products`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Get all the product created by the @Admin 
  const GetProduct = async (UserId: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/product/${UserId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const UpdateProduct = async (values: any) => {

  }


  return (
    <ProductContext.Provider
      value={{
        products,
        CreateProduct,
        UpdateProduct,
        GetProduct,
        GetProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
