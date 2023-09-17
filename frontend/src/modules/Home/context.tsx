

// import React, { createContext, useContext, useState } from 'react'
// import { IProduct } from './models';

// interface IProducts {
//   FetchAllProduct: () => void;
//   FetchProductDetail: (id: any) => void;

// }

// const ProvideContext = createContext<IProducts>({
//   FetchAllProduct() { },
//   FetchProductDetail(id) { }

// })
// export const useProductsProvider = () => {
//   let context = useContext(ProvideContext);
//   if (context === undefined) {
//     throw new Error("app dispatch must be used within app global provider");
//   }
//   return context;
// };

// interface IProps {
//   children: React.ReactNode;
// }

// export const ProductContext: React.FC<IProps> = ({ children }) => {
//   const [products, setProducts] = useState<IProduct[]>([]);

//   const FetchAllProduct = async () => {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/product/`, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" }
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

//   }

//   return (
//     <ProductContext.Provider value={{
//       FetchAllProduct
//     }}>{children}</ProductContext.Provider>
//   )
// }
