import { ApTextInput } from "@/components/input";
import { ApSelectInput } from "@/components/input/SelectInput";
import { Files } from "@/components/input/files";
import { Input, UploadProps } from "antd";
import { Formik, FormikProps, Form, Field } from "formik";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useProductContext } from "../context";
import { IProduct } from "../models";


interface IProps {
  product: IProduct;
  onDismiss: () => void;
}

// let FormSchema = Yup.object().shape({
//   // Product_name: Yup.string().required("Product_name is required"),
//   // categories: Yup.string().required("categories is required"),
//   // price: Yup.string().required("Price is required"),
//   // description: Yup.string().required("Product_name is required"),

// });




export const CreatePost: React.FC<IProps> = ({ product, onDismiss }) => {
  const [files, setFiles] = useState(null) as any;
  const { loading, CreateProduct, UpdateProduct, } = useProductContext();


  const handleProductImage: UploadProps["onChange"] = ({
    fileList: newFileList,
  }: any) => {
    setFiles(newFileList);
  };




  const handleSubmit = (values: any) => {
    const cookies = new Cookies()
    const userId = cookies.get("userId");

    if (product?._id) {
      const payload = { ...values };
      const id = product?._id;
      UpdateProduct(payload, id).then(() => {
        if (onDismiss) {
          onDismiss();
        }
      })
    } else {
      CreateProduct({
        ...values,
        images: files?.map((f: any) => ({
          uri: f?.thumbUrl,
          type: f?.type,
          name: f?.name,
        })),
      }, userId).then(() => {
        if (onDismiss) {
          onDismiss();
        }
      })
    }

  };




  return (
    <Formik
      initialValues={{
        Product_name: product?.Product_name || "",
        categories: product?.categories?.map((c) => c?.value) || "",
        price: product?.price || "",
        description: product?.description || "",
        // color: product?.color || "", soldout: "", quantity: ""
      }}
      // validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <ApTextInput
            type="text"
            label="Product_name"
            name="Product_name"
            className=" p-2 rounded-md outline-0 border  hover:bg-white "
          />
          <Field name="Product_name" placeholder="Last Name" />

          <ApTextInput
            type="text"
            label="Price.."
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
            className="text-white bg-blue-500 rounded-md  px-10 py-2  my-6"
          >
            {product?._id ? loading ? "Loading" : "Update Product" : loading ? "Loading..." : "Add Product"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

