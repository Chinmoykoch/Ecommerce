import { asynchandler } from "../utils/asynchandler.js";
import { Products } from "../models/product.js";
import { apiFeature } from "../utils/apiFeature.js";



// Error handling function
const handleMongoError = (error, res) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    res.status(409).json({
      success: false,
      message: 'Duplicate key error',
    });
  } else {
    res.status(500).json({
      success: false,
      message: 'Server Error',
    });
  }
};


// Create product -- Admin
export const createProduct = asynchandler(async (req, res, next) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    handleMongoError(error, res);
  }
});

// Get/find single product
export const getProductDetail = asynchandler(async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    handleMongoError(error, res);
  }
});

// Get all products
export const getAllProducts = asynchandler(async (req, res, next) => {
  try {
    const apifeature = new apiFeature(Products.find(), req.query).search().filter();
    const products = await apifeature.query;
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    handleMongoError(error, res);
  }
});

// Update product -- Admin
export const updateProduct = asynchandler(async (req, res, next) => {
  try {
    let product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
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
  } catch (error) {
    handleMongoError(error, res);
  }
});

// Delete product
export const deleteProduct = asynchandler(async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      success: true,
      message: "Product successfully deleted",
    });
  } catch (error) {
    handleMongoError(error, res);
  }
});

