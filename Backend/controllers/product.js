import { asynchandler } from "../utils/asynchandler.js";
import { Products } from "../models/product.js";
// import { ApiError } from "../utils/apiError.js";
import { apiFeature } from "../utils/apiFeature.js";

// create product -- Admin

export const createProduct = asynchandler(async (req, res, next) => {
  const product = await Products.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// get/find single product

export const getproductDetail = asynchandler(async (req, res, next) => {
  const product = await Products.findById(req.params.id);
 
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not found",
    });

    // return next(new ApiError("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// get all products

export const getAllProducts = asynchandler(async (req, res, next) => {

  const apifeature = new apiFeature(Products.find(),req.query).search().filter()  // filtering and search products 
  // const products = await Products.find();
  const products = await apifeature.query
  res.status(200).json({
    success: true,
    products,
  });
});

// update product -- Admin

export const updateProduct = asynchandler(async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not found",
    });
  }
  product = await Products.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// delete product

export const deleteProduct = asynchandler(async (req, res, next) => {
  const product = await Products.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "product not found",
    });
  }
  await product.deleteOne();

  res.status(200).json({
    success: "true",
    message: " product successfully deleted",
  });
});
