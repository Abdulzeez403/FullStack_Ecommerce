import React, { useEffect, useState } from "react";
import { DetailPage } from "./detail";
import ProductTable from "./components/Table";
import Cookies from "universal-cookie";
import { useProductContext } from "./context";
import { DashboardNav } from "../Layout/dashboard";
import ApModal from "@/components/modal/modal";
import { CreatePost } from "./components/create";
import { IProduct } from "./models";
import { Breadcrumb, Button, Input } from "antd";
import { Head } from "next/document";

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

      <Breadcrumb items={[{ title: 'Product' }]} />
      <div className="flex justify-between items-center my-4">
        <div className="hidden md:flex lg:flex ">
          <div className="w-[30rem] md:w-[20rem] lg:w-[30rem]">
            <Input
              size="large"
              placeholder="Search products, brand and categories"
              allowClear={false}
              className="w-[100%] rounded-md py-2"

            // value={searchValue}
            // onChange={handleInputChange}
            />
          </div>
          <div className="space-x-2 items-center px-2">

            <Button
              type="primary"
              size="large"
              className="text-black border-black font-semibold rounded-l-none p-x-2 "
            // onClick={() => onSearch()}

            >
              Clear
            </Button>

            <Button
              type="primary"
              size="large"
              className="bg-black text-white font-semibold rounded-l-none p-x-2 "
            // onClick={() => onSearch()}

            >
              Search
            </Button>
          </div>

        </div>
        <div>
          <Button onClick={handleCreateProduct}
            type="primary"
            size="large"
            className="text-black border-black font-semibold  p-x-2 "
          >Create Product</Button>
        </div>


      </div>


      <table className="min-w-full text-left text-sm bg-skin-alt rounded-md ">
        <thead className="border-b font-medium bg-slate-300 rounded-lg">
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
