import mongoose, { Schema } from "mongoose";

export const TextSchema = new Schema(
  {
    text: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

export const Text = mongoose.model("Text", TextSchema);
