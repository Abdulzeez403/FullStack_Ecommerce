const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
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
    categories: { type: Array },
    price: {
        type: String,
        required: true
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

  
});

//Export the model
module.exports = mongoose.model('Product', ProductSchema);