const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    cart: {
        type: Object,
        required: true
    },
    amount: {
        type: Number, default: 1,
        required: true
    },
    address: {
        type: Object, default: "NO 60 Zone Apalara Area, Ilorin, Kwara state",
        required: true
    },
    status: {
        type: String, default: "new",
        required: true
    }
},
    { timestamps: true });

module.exports = mongoose.model('order', OrderSchema);
