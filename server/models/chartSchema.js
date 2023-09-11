const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    product: {
        product: { type: {} },
    },
    quantity: {
        type: Number, default: 1
    }
},
    { timestamps: true });

module.exports = mongoose.model('cart', ChatSchema);
