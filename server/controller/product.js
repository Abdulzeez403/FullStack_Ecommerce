
const asyncHandler = require("express-async-handler");
const { upLoadFiles, mapFiles } = require("../middleware/file");
const productSchema = require("../models/productSchema")

// const CreateProduct = asyncHandler(async (req, res) => {
//   const { Product_name, description, images, price } = req.body;

//   // const images = req.files

//   // const { images, ...values } = req.body;

//   try {
//     const files = await mapFiles(images);

//     const product = await productSchema.create({
//       Product_name,
//       description,
//       price,
//       images: files,
//     });
//     // const product = new productSchema({ ...values, images: files });
//     const data = await product.save();
//     console.log(data)
//     res.send(data)
//   } catch (errors) {
//     res.json({ success: false, errors });
//     console.log(errors)
//   }

// });
const CreateProduct = async (req, res) => {
  const { Product_name, description, images, price } = req.body;


  try {
    const fls = await mapFiles(images);
    const product = await productSchema.create({
      Product_name,
      description,
      price,
      images: fls,
    });
    const data = await product.save();
    res.json({ success: true, message: 'Product created successfully', product: data });
    console.log(data)
  } catch (errors) {
    res.json({ success: false, errors });
    console.log(errors)
  }


};

module.exports = { CreateProduct }