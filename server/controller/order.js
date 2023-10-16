const chartSchema = require("../models/chartSchema");
const orderSchema = require("../models/orderSchema");


const PlaceOrder = async (req, res) => {
    const { id, amount, address } = req.body;
    try {
        const cartId = chartSchema.find({ userId: id })
        if (cartId) {
            const createOrder = await new orderSchema({
                id, amount, address, userId: id
            })
            const order = await createOrder.save();
            res.status(200).json({ data: order, message: "Order Placed!" })
        }
    }
    catch (error) {
        res.json({ success: false, error });
        console.log(error)

    }
}

const GetOrder = async (req, res) => {
    try {
        const order = orderSchema.find();
        res.status(200).json({ data: order, message: "Order Placed!" })
    }
    catch (error) {
        res.json({ success: false, error });

    }
}



module.exports = { PlaceOrder, GetOrder }