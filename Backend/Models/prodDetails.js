import mongoose from "mongoose";

const prodDetails = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    sku: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

export const Product = mongoose.model('Product', prodDetails);

