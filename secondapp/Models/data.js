const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:String,
}) ;
exports.Data = mongoose.model("Data", userSchema);
exports.userSchema = userSchema;