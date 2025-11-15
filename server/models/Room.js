
import mongoose from "mongoose";

const roomSchemma = new mongoose.Schema({
   hotel: {type: String, ref: "Hotel", required: true},
   roomType: {type: String, required: true},
   pricePerNight: {type: Number, required: true},
   amenities: {type: Array, required: true},
   images: [{type: String}],
   isAvailable: {type: Boolean, default: true},
}, {timestamps:true});

const Room = mongoose.model("Room", roomSchemma);
export default Room;
