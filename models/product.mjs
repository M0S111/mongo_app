import mongoose from "mongoose";
const { Schema, model } = mongoose;

const prodSchema = new Schema({
    name: {type: String, required: true, minlength: 1},
    price: {type: Number, required: true, minlength: 1},
    createdAt: Date,
    updatedAt: Date
});

const Product = mongoose.model('Prod',prodSchema);

export default Product;