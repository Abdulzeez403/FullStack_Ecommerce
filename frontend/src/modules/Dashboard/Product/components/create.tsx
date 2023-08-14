import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import React, { useEffect, useState } from "react";
import { useProductContext } from "../context";
import { ApTextInput } from "@/components/input";
import { IProduct } from "../models";
import { UploadProps } from "antd";
import { Files } from "@/components/input/files";
import { ApSelectInput } from "@/components/input/SelectInput";
import { useUserContext } from "@/modules/auth/UserContext";



export const CreatePost = () => {
  const [files, setFiles] = useState(null) as any;
  const { CreateProduct } = useProductContext();
  const { user, CurrentUser } = useUserContext();



  const handleProductImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }: any) => {
    console.log(newFileList, "newFIleListt");
    setFiles(newFileList);
  };

  const handleSubmit = (values: any, UserId: any) => {

    CreateProduct({
      ...values,
      images: files?.map((f: any) => ({
        uri: f?.thumbUrl,
        type: f?.type,
        name: f?.name,
      })),
    }, user?._id)
    CurrentUser();
    console.log(user?._id, "UserID")

  };




  return (
    <Formik
      initialValues={{
        Product_name: "",
        category: {
          label: "T-Shirt",
          value: "T-Shirt"
        },
        price: "",
        description: "", color: "", soldout: "", quantity: ""
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
            label="Categories"
            name="categories"
            options={[
              {
                label: "Shoe",
                value: "Shoe",
              },
              {
                label: "T-shirt",
                value: "T-shirt",
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

