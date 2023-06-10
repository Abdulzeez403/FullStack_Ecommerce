import axios from "axios";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import React, { useEffect, useState } from "react";
import { AiFillSave, AiOutlineCloudUpload } from "react-icons/ai";
import { toast } from "react-toastify";
import { useProductContext } from "../context";
import { ApTextInput } from "@/components/input";
import { ApTextEditor } from "@/components/input/TextEditor";
import { IProduct } from "../models";
import { Button, Upload, UploadProps } from "antd";
import { Files } from "@/components/input/files";

// interface IProps {
//   data?: IProduct;
// }

export const CreatePost = () => {
  const [files, setFiles] = useState(null) as any;
  const { CreateProduct } = useProductContext();


  const handleProductImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }: any) => {
    console.log(newFileList, "newFIleListt");
    setFiles(newFileList);
  };

  const handleSubmit = (values: IProduct) => {
    CreateProduct({
      ...values,
      images: files?.map((f: any) => ({
        uri: f?.thumbUrl,
        type: f?.type,
        name: f?.name,
      })),
    })

  };

  return (
    <Formik
      initialValues={{ name: "", body: "", images: "", category: "", price: "", }}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<any>) => (
        <Form className=" ">
          <ApTextInput
            type="text"
            label="Name"
            name="name"
            className=" p-2 rounded-md outline-0 border hover:bg-white  "
          />

          <ApTextInput
            type="text"
            label="Price"
            name="price"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />


          <ApTextInput
            type="text"
            label="Category"
            name="category"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />
          <ApTextInput
            type="text"
            label="Tags"
            name="tags"
            className=" p-2 rounded-md outline-0 border hover:bg-white"
          />

          <Files
            fileList={files}
            handleChange={(res: any) => handleProductImage(res)}
          />


          <button
            type="submit"
            className="text-white bg-blue-500 rounded-md  px-10 text-lg  my-6"
          >
            Submit
          </button>




        </Form>
      )}
    </Formik>
  );
};

// values: MyData,
// { setSubmitting }: FormikHelpers<MyData>
// ) => {
// try {
//   await axios
//     .post("http://localhost:5000/api/blog/" + user?.id, values)
//     .then(() => {
//       toast.success("Post Successfully");
//     });
// } catch (error) {
//   console.error(error);
// }

// setSubmitting(false);
