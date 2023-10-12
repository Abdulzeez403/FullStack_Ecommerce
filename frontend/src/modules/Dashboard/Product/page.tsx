import React, { useEffect, useState } from "react";
import { DetailPage } from "./detail";
import ProductTable from "./components/Table";
import Cookies from "universal-cookie";
import { useProductContext } from "./context";
import { DashboardNav } from "../Layout/dashboard";
import ApModal from "@/components/modal/modal";
import { CreatePost } from "./components/create";
import { IProduct } from "./models";

const ProductPage = () => {

  const { products, GetProduct } = useProductContext();
  const cookies = new Cookies()

  useEffect(() => {
    const getCookies = cookies.get("userId")
    GetProduct(getCookies)
  }, [])

  const [modal, setModal] = useState<{
    show: boolean;
    data?: any;
    type?: "Create Product" | "Update Product" | "Cart";
  }>({
    show: false,
    type: "Create Product"
  });
  const handleCreateProduct = () => {
    setModal({ show: true, data: null, type: "Create Product" });
  }
  const handleViewDetail = (product: IProduct) => {
    setModal({ show: true, data: product, type: "Update Product" });
  };




  return (
    <DashboardNav>
      <div>
        <button onClick={handleCreateProduct} className='bg-black text-white rounded-md py-2 px-2 '>Create Product</button>
      </div>
      <table className="min-w-full text-left text-sm bg-skin-alt border">
        <thead className="border-b font-medium bg-slate-300">
          <tr>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 py-4">
              Product_name
            </th>
            <th scope="col" className="px-6 py-4">
              Price
            </th>
            <th scope="col" className="px-6 py-4">
              Categories
            </th>

            <th scope="col" className="px-6 py-4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product: IProduct, index: number) => (
            <React.Fragment key={index} >
              <DetailPage product={product} handleModal={() => handleViewDetail(product)} />

              <ApModal
                title={modal?.type}
                show={modal.show}
                width={500}
                onDimiss={() => setModal({ show: false })}
              >
                {modal?.type && (
                  <CreatePost product={modal?.data}
                    onDismiss={() => setModal({ show: false })}
                  />
                )}

              </ApModal>
            </React.Fragment>

          )
          )}
        </tbody>
      </table>
    </DashboardNav>

  );
};

export default ProductPage;
