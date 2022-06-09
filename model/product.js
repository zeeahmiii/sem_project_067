var mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
    Name: String,
    Price: String,
    Model: Number,
});

const Product = mongoose.model("Product",productsSchema);
module.exports =  Product;