
const asyncHandler = require("express-async-handler");
const {  mapFiles } = require("../middleware/file");
const productSchema = require("../models/productSchema")

 const CreateProduct = asyncHandler(async (req, res) => {
  // const { Product_name, description, images, price } = req.body;
  // let { uri, name, type } = images;

  const { images, ...values } = req.body;

  try {
    const files = await mapFiles(images);
    // const product = await productSchema.create({
    //   Product_name,
    //   description,
    //   price,
    //   images: { uri: files, name, type },
    // });
    const product = new productSchema({ ...values, images: files });
    const data = await product.save();
    console.log(data)
    res.json({ success: true, data: data });
  } catch (errors) {
    res.json({ success: false, errors });
    console.log(errors)
  }

});
// const CreateProduct = async (req, res) => {
//     const { images, ...values } = req.body;
//     // const {images} = req.file.body;
//     try {
//       const files = await mapFiles(images);
//       const product = new productSchema({ ...values, images: files });
//       const data= await product.save();
//       res.json({ data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

module.exports = { CreateProduct }