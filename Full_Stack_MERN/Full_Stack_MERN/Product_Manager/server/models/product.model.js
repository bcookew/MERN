const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description:String
}, {timestamps:true})

module.exports.Product = mongoose.model('product', ProductSchema);