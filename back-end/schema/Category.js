import mongoose, { Schema } from "mongoose";

export const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", CategorySchema);
