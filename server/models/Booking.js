import mongoose from "mongoose";

const bookingSchemma = new mongoose.Schema({
   user: { type: String, ref: "User", require: true },
   room: { type: String, ref: "Room", require: true },
   hotel: { type: String, ref: "Hotel", require: true },
   checkInDate: { type: Date, require: true },
   checkOutDate: { type: Date, require: true },
   totalPrice: { type: Number, require: true },
   guests: { type: Number, require: true },
   status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending"
   },
   paymenMethod: {
      type: String,
      require: true,
      default: "Pay At Hotel"
   },
   isPaid: { type: Boolean, default: false },

}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchemma);
export default Booking;