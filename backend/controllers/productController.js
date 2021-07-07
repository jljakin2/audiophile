import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products by category
// @route GET /api/products/:category
// @access Public
const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: req.params.category });

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Product category does not exist");
  }
});

// @desc Fetch a single product by the product slug
// @route GET /api/products/:slug
// @access Public
const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.find({ slug: req.params.slug });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProductsByCategory, getProductBySlug };
