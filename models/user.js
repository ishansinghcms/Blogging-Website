let mongoose = require("mongoose");
let passpotLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema(
{
    username: String,
    password: String
});

userSchema.plugin(passpotLocalMongoose);

module.exports = mongoose.model("User" , userSchema);