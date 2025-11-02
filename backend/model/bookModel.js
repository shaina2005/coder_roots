import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
    },
  },
  { timestamps: true }
);

const booking = mongoose.model("booking", bookingSchema);
export default booking;
