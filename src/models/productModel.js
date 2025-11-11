import mongoose from "mongoose";

// A Schema for individual reviews
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// The main Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    slug: {
      type: String,
      required: true,
      unique: true, // Slugs should be unique for SEO-friendly URLs
    },
    image: {
      type: String,
      required: [true, "Please enter product image URL"],
    },
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String, required: true },
      },
    ],

    sku: {
      type: String,
      required: false, // Or true, if you always have one
      unique: true,
    },
    brand: {
      type: String,
      required: [true, "Please enter product brand"],
    },
    category: {
      type: String,
      required: [true, "Please enter product category"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    reviews: [reviewSchema], // An array of review sub-documents
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      default: 0,
    },
    oldPrice: {
      type: Number,
      required: false, // Only set it if there's a sale
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically creates createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
