const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },

    Product_name: {
        type: String,
    },
    description: {
        type: String,
    },

    images: [
        {
            uri: { type: String },
            name: { type: String },
            type: { type: String }
        },
    ],
    categories: {
        type: Array
    },
    price: {
        type: String,
    },

    quantity: {
        type: String
    },
    soldout: {
        type: String,
        default: false
    },
    availability: {
        type:
            String
    },
    brand: {
        type:
            String
    },
    size: {
        type:
            String
    },
    color: {
        type:
            String
    },
    rating: {
        type:
            Number
    },


},
    { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);