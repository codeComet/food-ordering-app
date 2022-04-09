import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    paymentMethod: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model.Order || mongoose.model("Order", orderSchema);
