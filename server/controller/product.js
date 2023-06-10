
const asyncHandler = require("express-async-handler");
const { upLoadFile, mapFiles } = require("../middleware/file");
const productSchema = require("../models/productSchema")

// const CreateProduct = asyncHandler(async (req, res) => {
//     const { Product_name, description, images, price } = req.body;
//     let { uri, name, type } = images;

//     try {
//         const files = await upLoadFile(uri, name);
//         const product = await productSchema.create({
//             Product_name,
//             description,
//             price,
//             images: { uri: files, name, type },
//         });
//         console.log(product)
//         res.json({ success: true, data: product });
//     } catch (errors) {
//         res.json({ success: false, errors });
//     }

// });
const CreateProduct = async (req, res) => {
    const { images, ...values } = req.body;
    try {
      const files = await mapFiles(images);
      const product = new productSchema({ ...values, images: files });
      const data= await product.save();
      res.json({ data });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { CreateProduct }