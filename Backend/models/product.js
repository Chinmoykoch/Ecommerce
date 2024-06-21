import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  productImage: {
    public_Id: {
      type: String, // cloudinary url
      required: true,
    },
    url: {
      type: String, // cloudinary url
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
    maxLength: 8,
  },
  ratings: {
    type: String,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  stocks: {
    type: Number,
    default: 0,
    maxLength: 10,
  },
  numofReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      ratings: {
        type: String,
        required: true,
      },
      comments: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Products = mongoose.model("Products", productSchema);
