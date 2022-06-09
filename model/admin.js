var mongoose = require("mongoose");

var adminSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
});

const Admin = mongoose.model("admin",adminSchema);
module.exports =  Admin;