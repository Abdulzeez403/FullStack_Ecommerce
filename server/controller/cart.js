
const cartSchema = require("../models/chartSchema");
const productSchema = require("../models/productSchema");

const addCart = async (req, res) => {
    try {
        const { userId, product } = req.body;
        const { _id, quantity } = product;
        const productItem = await productSchema.findById(_id);
        const cartProduct = new cartSchema({
            userId,
            product: {
                product: productItem,
                quantity
            }
        });

        const cart = await cartProduct.save();
        return res.json({ success: true, message: 'Add-to-cart created successfully', data: cart });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}



const getUserCart = async (req, res) => {
    const userId = req.params.id;
    try {
        const cart = await cartSchema.find({ userId: userId }).exec();
        res.json({ success: true, message: 'Get user carts', data: cart });
    } catch (errors) {
        res.json({ success: false, errors });
        console.log(errors)
    }

}

const updateCart = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const cart = await cartSchema.findByIdAndUpdate(id, body, { new: true });
        res.json({ success: true, message: 'cart updated', data: cart });
    } catch (errors) {
        res.json({ success: false, errors });
        console.log(errors);
    }

}

const deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await cartSchema.findByIdAndRemove(id);
        res.status(200).json({ success: true, message: 'Cart Deleted', data: cart });

    } catch (errors) {
        res.json({ success: false, errors });
        console.log(errors);
    }
}

const getAllCart = async (req, res) => {
    try {
        const cart = await cartSchema.find();
        res.json({ success: true, message: 'Get All Cart successfully', data: cart });
    } catch (errors) {
        res.json({ success: false, errors });
        console.log(errors);
    }
}
const emptyCart = async (req, res) => {

    const id = req.params.userId;
    const cart = await cartSchema.find({ userId: id })
    if (cart) {
        await cartSchema.deleteMany({ userld: id })
        const data = await cartSchema.find();
        res.json({ success: true, message: 'Cart is empty successfully!', data: data });

    }
}

module.exports = { addCart, getUserCart, updateCart, deleteCart, getAllCart, emptyCart }