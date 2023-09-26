import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IProduct } from "./models";

interface IProp {
  product: IProduct,
  products: IProduct[];
  CreateProduct: (values: IProduct, UserId: any) => Promise<void>;
  GetProducts: (categories: any) => void;
  GetProduct: (value?: any) => void;
  GetProductDetailId: (id: any) => void;

  UpdateProduct: (values: IProduct, userId: any) => Promise<void>;
  deleteProduct: (userId: any) => void;

}

const ProductContext = createContext<IProp>({
  product: {} as any,
  products: [] || null,
  CreateProduct(values, UserId) {
    return null as any;
  },
  GetProducts(categories) { },
  GetProduct(UserId) { },
  GetProductDetailId(id) { },

  UpdateProduct(values, userId) {
    return null as any;
  },
  deleteProduct(userId) { }
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
  const [product, setProduct] = useState<IProduct>({} as any);

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
  const GetProducts = async (categories: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/products?categories=${categories}`, {
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

  const UpdateProduct = async (values: any, userId: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/product/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)

      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const deleteProduct = async (userId: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/product/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },

      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
      toast.success("`Product Deleted!")
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error as any)
    }
  }

  const GetProductDetailId = async (id: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/products/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(values)

      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        products,
        CreateProduct,
        GetProducts,
        GetProduct,
        GetProductDetailId,
        UpdateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
