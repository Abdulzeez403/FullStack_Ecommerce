
const asyncHandler = require("express-async-handler");
const { mapFiles } = require("../middleware/file");
const productSchema = require("../models/productSchema")
const userSchema = require("../models/userSchema")


const CreateProduct = async (req, res) => {
  const { Product_name, description, images, price, categories, quantity, soldout } = req.body;
  const userId = req.params.id;


  try {
    const fls = await mapFiles(images);
    const product = await productSchema.create({
      userId,
      Product_name,
      description,
      categories,
      price,
      quantity,
      soldout,
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

const UpdateProduct = async (req, res) => {
  const { Product_name, description, images, price, categories, quantity, soldout } = req.body;
  const { id } = req.params;

  try {
    const fls = await mapFiles(images);
    const product = await productSchema.findByIdAndUpdate(id, {
      Product_name,
      description,
      categories,
      price,
      quantity,
      soldout,
      images: fls,
    },
      { new: true }
    );

    res.status(200).json({ success: true, message: 'Updated created successfully', product: product });
  } catch (errors) {
    res.json({ success: false, errors });
    console.log(errors)
  }

};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await productSchema.findByIdAndDelete(id)
    res.status(200).json({ success: true, message: 'Deleted created successfully', product: deleteProduct });
  } catch (error) {
    res.json({ success: false, error })
  }


};

const GetProducts = async (req, res) => {

  try {
    const getProducts = await productSchema.find();
    if (!getProducts) {
      return res.status(401).send("No Products found!");
    }
    res.status(200).send(getProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("An error occurred while fetching products.");
  }
};

const GetProductDetail = async (req, res) => {
  const { id } = req.params;
  // const body = req.body;

  try {
    const product = await productSchema.findById(id, req.body, { new: true });
    res.status(200).send(product)
  }
  catch {
    throw new Error("Invalid ProductId")
  }
}

const GetProduct = async (req, res) => {
  const userId = req.params.id;
  try {
    // const user = await userSchema.find({ userId })
    // console.log(user)
    // if (!user) return res.status(401).json({ error: 'Unauthorized' })
    const getProduct = await productSchema.find({ User: userId });
    if (!getProduct || getProduct.length === 0) {
      return res.status(401).send("No Products found!");
    }
    res.status(200).send(getProduct);
  } catch (error) {
    1
    console.error("Error fetching products:", error);
    res.status(500).send("An error occurred while fetching products.");
  }
}

module.exports = { CreateProduct, GetProducts, UpdateProduct, DeleteProduct, GetProduct, GetProductDetail }