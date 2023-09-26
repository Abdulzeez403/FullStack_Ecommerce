import {
  Form,
  Formik,
  FormikProps,
} from "formik";
import React, { useState } from "react";
import { useProductContext } from "../context";
import { ApTextInput } from "@/components/input";
import { UploadProps } from "antd";
import { Files } from "@/components/input/files";
import { ApSelectInput } from "@/components/input/SelectInput";
import Cookies from 'universal-cookie';




export const CreatePost = () => {
  const [files, setFiles] = useState(null) as any;
  const { CreateProduct, UpdateProduct,
    product, GetProductDetailId } = useProductContext();


  const handleProductImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }: any) => {
    setFiles(newFileList);
  };


  // GetProductDetailId("650b97fe60424a3e3d44bed0");

  const handleSubmit = (values: any) => {
    const cookies = new Cookies()
    const userId = cookies.get("userId");
    const productId = "650b97fe60424a3e3d44bed0";
    console.log(productId)
    if (productId) {
      UpdateProduct({ ...values }, userId)
    } else {
      CreateProduct({
        ...values,
        images: files?.map((f: any) => ({
          uri: f?.thumbUrl,
          type: f?.type,
          name: f?.name,
        })),
      }, userId)
    }

  };




  return (
    <Formik
      initialValues={{
        Product_name: product?.Product_name || "",
        categories: product?.categories?.map((c) => c.value) || "",
        price: product?.price || "",
        description: product?.description || "",
        color: product?.color || "", soldout: "", quantity: ""
      }}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<any>) => (
        <Form className=" ">
          <ApTextInput
            type="text"
            label="Name"
            name="Product_name"
            className=" p-2 rounded-md outline-0 border hover:bg-white  "
          />

          <ApTextInput
            type="text"
            label="Price"
            name="price"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />


          <ApSelectInput
            label="Category"
            name="categories"
            options={[
              {
                label: "Phones",
                value: "Phones",
              },
              {
                label: "T-shirt",
                value: "T-shirt",
              },
              {
                label: "Electronic",
                value: "Electronic",
              },
            ]}
            className="border w-[100%] p-2 rounded-md outline-0 hover:border-slate-600"
          />

          <ApTextInput
            type="textarea"
            label="Product Description"
            name="description"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />


          <Files
            fileList={files}
            handleChange={(res: any) => handleProductImage(res)}
          />

          <button
            type="submit"
            className="text-white bg-blue-500 rounded-md  px-10   my-6"
          >
            Submit
          </button>




        </Form>
      )}
    </Formik>
  );
};

