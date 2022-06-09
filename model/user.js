var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
});

const User = mongoose.model("user",UserSchema);
module.exports =  User;