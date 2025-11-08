import mongoose from "mongoose";

const hotelSchemma = new mongoose.Schema({
    name: {type: String, require: true},
    address: {type: String, require: true},
    contact: {type: String, require: true},
    owner: {type: String, require: true, ref: "User"},
    city: {type: String, require: true},

}, {timestamps:true});

const Hotel = mongoose.model("Hotel", hotelSchemma);
export default Hotel;